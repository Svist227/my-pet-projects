const rootSelector = '[data-js-changeContent]'

class ButtonTabMovies{
    selectors = {
        root: rootSelector
    }
    constructor(){

        this.widthElement = document.querySelector(this.selectors.root)
        this.ChangeContent()
        this.onResizeChange()
       
        
    }
   
    ChangeContent = () => {
        // let mat = this.widthElement.getAttribute('data-js-changeContent')
        console.log(this.params)
        
    }


  
    onResizeChange = () => {
        addEventListener('resize', ()=>{ 
            let params = JSON.stringify({width: window.innerWidth, height: window.innerHeight})
            document.querySelector(rootSelector).setAttribute('data-js-changeContent', params)
            let mat = JSON.parse(params)
            if (mat.width < 700){
                console.log('Девчонки не дают')
            }
        })
    }
    

    
   
    
    
}

export default ButtonTabMovies