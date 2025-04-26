class BaseComponent { //абстрактный класс по нему создаются другие классы родитель дочерних компонентов
    // Перерисовка UI в ответ на обновление класса 
    constructor(){
        if (this.constructor === BaseComponent){
            throw new Error('Невозможно создать экземпляр абстрактного класса BaseComponent')

        }
    }
    getProxyState(initialState){
        return new Proxy(initialState, {
            get: (target,prop) => {
                return target[prop]
            },
            set: (target,prop, newValue) => {
                const olsValue = target[prop] // получение свойства объ-кта до изменений

                target[prop] = newValue

                if (newValue !==olsValue){
                     this.updateUI()
                }
                return true
            },
        }) // встроенный объект  
    }
    updateUI(){
        throw new Error('Необходимо реализовать updateUI!') // если в наследственном классе не будет такого метода, то мы предупредим себя что нужен соб-ый метод UI
    }

}

export default BaseComponent