class Tabs {
    selectors = {
        main_block: '[container__body]',
        root: '[container__button]',
        button: '[button_box]'
    }
    stateClasses = {
        isActive: 'is-active'
        
    }
   
    constructor(){
        this.activeIndex = 0
        this.mainBlock = document.querySelector(this.selectors.main_block)
        this.rootElement = document.querySelector(this.selectors.root)
        this.ButtonElement = document.querySelectorAll(this.selectors.button)
        this.onButtonCkick()
        
    }
    setActive (index) {
            this.activeIndex = index;
            this.ButtonElement.forEach((Element, i) => {
                Element.classList.toggle(this.stateClasses.isActive,i === index )
               
            })
            window.activeTab = this.activeIndex;
        
    }

    onButtonCkick = () => {
        // this.rootElement.addEventListener('click', this.setActive() )
        this.ButtonElement.forEach((element, index) => {
            element.addEventListener('click', ()=>{this.setActive(index)})
        })


    }

    


}




export default ButtonBox