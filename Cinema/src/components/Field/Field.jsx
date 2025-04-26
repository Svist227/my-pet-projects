import classNames from 'classnames'
import './Field.scss'
import Select from '../Select'

const Field = (props) => {
    const {
        className,
        id,
        textarea,
        mode,
        isRequared,
        placeholder,
        inputMode,
        mask,
        renderBefore  //функция
    } = props

    const extraAttrs = {}

    if(mask){
        extraAttrs['data-js-input-mask'] = mask
    }
    return (
        <div className={classNames('field', {
            'support__form-grow': className
        })}>
            <div className="field__info">
                <label className="field__title" htmlFor = {id}>First {id}
                    {isRequared && (
                        <span className='field__required-star'
                        aria-hidden='true'>*</span>
                    )}
                </label>
                    
            </div>
           
            <div className="field__input"> 
                    {renderBefore?.('field__input-control')}    
                
                    
                   {!textarea && (
                     <input className="field__input-control" placeholder={placeholder}
                     {...extraAttrs} id={id}
                     inputMode = {inputMode}/>
                   )}
                   {textarea && (
                    <textarea className="field__textarea" placeholder={placeholder}id={id}/>
                   )}
                    {/* <div className="field__input-title">{`Enter First ${id}`}</div> */}
            </div>

            
        </div>
    )
}


export default Field