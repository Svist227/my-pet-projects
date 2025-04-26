import GetParams from "@/utils/getParams"
import pxToRem from "@/utils/pxToRem"
import BaseComponent from "./generic/BaseComponent"

const rootSelector = '[data-js-tabs]'


class Tabs extends BaseComponent{ // наследование от абсрактного класса
    selectors = {
        root: rootSelector,
        navigation: '[data-js-tabs-navigation]',
        button: '[data-js-tabs-button]',
        content: '[data-js-tabs-content]'
    }
    stateClasses = {
        isActive: 'is-active',
    }
    stateCSSVariables = {
        activeButtonWidth: '--tabsNavigationActiveButtonWidth',
        activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft',
    }
    constructor(rootElement){
        super()
        this.rootElement = rootElement
        this.params = GetParams(this.rootElement, this.selectors.root) // получаем значение атрибута root элемента по селектору в формате js без []
        this.navigationElement = this.params.navigationTargetElementId
        ? document.getElementById(this.params.navigationTargetElementId) //навигация либо в элементе action либо в другом месте
        : this.rootElement.querySelector(this.selectors.navigation)
        this.buttonElements = [...this.navigationElement.querySelectorAll(this.selectors.button)] /// ... для преобразования в массив для использования его методов
        this.contentElements = [...this.rootElement.querySelectorAll(this.selectors.content)]
        this.state = this.getProxyState({ // метод абстрактного класса 
            activeTabIndex: this.buttonElements.findIndex(({ariaSelected}) => ariaSelected) // атрибут аria-selected html в dom конвертируется в ariaSelected (из kebab-case в camelCase).  
        }   )
        this.limitTabsIndex = this.buttonElements.length - 1 //аксесабилити 
        this.bindEvents() 
        setTimeout(this.bindObservers, 500)
       

    }

    updateUI(){
         // ОБНОВИТЬ ДОМ ДЕРЕВО т.е. интерфейс
         const {activeTabIndex } = this.state

        this.buttonElements.forEach((buttonElement,index) => {
            const isActive = index === activeTabIndex
            buttonElement.classList.toggle(this.stateClasses.isActive, isActive) // добавляем или удаляем класс актива
            buttonElement.ariaSelected = isActive //аксесабилити 
            buttonElement.tabIndex = isActive ? 0 : -1 //аксесабилити 

            if (isActive) {
                this.updateNavigationCSSVars(buttonElement)
            }
        })
         this.contentElements.forEach((contentElement,index) => {
            const isActive = index === activeTabIndex // актуальный активная кнопка
            contentElement.classList.toggle(this.stateClasses.isActive, isActive) // не понятно зачем 2 параметр можно без него


         })

    }
    updateNavigationCSSVars(activeButtonElement = this.buttonElements[this.state.activeTabIndex]){ 
        const {left, width} = activeButtonElement.getBoundingClientRect()
        const  offsetLeft = left - this.navigationElement.getBoundingClientRect().left
        
        //  console.log("Button width:", width);
        // console.log("Offset left:", offsetLeft);

        if (width === 0) {
            console.warn("⚠️ Ошибка: ширина кнопки 0! Возможно, стили ещё не прогрузились.");
        return;
    }

        this.navigationElement.style.setProperty(
            this.stateCSSVariables.activeButtonWidth, 
            `${pxToRem(width)}rem`
        )
        this.navigationElement.style.setProperty(
            this.stateCSSVariables.activeButtonOffsetLeft, 
            `${pxToRem(offsetLeft)}rem`
        )
    }

    activateTab(newTabIndex) {
        this.state.activeTabIndex = newTabIndex
        // this.updateUI()
        this.buttonElements[newTabIndex].focus()
    }
    previousTab = () => {
        const newTabIndex = this.state.activeTabIndex === 0
        ? this.limitTabsIndex
        : this.state.activeTabIndex -1

       this.activateTab(newTabIndex)
    }
    nextTab = () => {
        const newTabIndex = this.state.activeTabIndex === this.limitTabsIndex
        ? 0
        : this.state.activeTabIndex + 1

        this.activateTab(newTabIndex)
    }
    firstTab = () => {
        this.activateTab(0)
    }
    lastTab = () => {
        this.activateTab(this.limitTabsIndex)
    }

    onButtonClick(buttonIndex){
        this.state.activeTabIndex = buttonIndex
        // this.updateUI() 
    }

    onKeyDown = (event) => {
        const { target, code, metakey} = event 
        const isTabsContentFocused = this.contentElements
        .some((contentElement) => contentElement === target) // если клик произошел по активному контенту
        const isTabsButtonFocused = this.buttonElements
        .some((buttonElement) => buttonElement === target) // если клик произошел по активной кнопке

        if (!isTabsButtonFocused && !isTabsContentFocused){
            return 
        }
        const action = {
            ArrowLeft: this.previousTab,
            ArrowRight: this.nextTab, // при нажатии клавиш активируются различные табы
            Home: this.firstTab,
            End: this.lastTab,
        } [code] // наложение инфы с code в action
        
        const isMacHomeKey = metakey && code  === 'ArrowLeft' // в мета 0 or 1
        if (isMacHomeKey) {
            event.preventDefault() // для маков
            this.firstTab()
            return // прерывание типо break 
        }
        const isMacEndKey = metakey && code  === 'ArrowRight' // в мета 0 or 1
        if (isMacEndKey) {
            event.preventDefault() // для маков
            this.lastTab()
            return // прерывание типо break 
        }

       // action?.() // если не underfind то сработает 
       if (action) {
        event.preventDefault()  // из за мака 
        action()
       }
    }
    bindEvents() {
        this.buttonElements.forEach((buttonElement, index) => {
            buttonElement.addEventListener('click', () => this.onButtonClick(index))

        })
        document.addEventListener('keydown', this.onKeyDown)
    }
    onResize = () => {
        this.updateNavigationCSSVars()
    }

    bindObservers = () => {
        const resizeObserver = new ResizeObserver(this.onResize)

        resizeObserver.observe(this.navigationElement)
    }
    

}
class TabsCollection {

    constructor(){
        this.init() //для того чтобы метод вызывался не вручную а автоматически
    }

    init(){

        document.querySelectorAll(rootSelector).forEach((button,index) => {
            new Tabs(button)
        })
    }
}   

export default TabsCollection