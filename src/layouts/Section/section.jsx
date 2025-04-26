import classNames from 'classnames'
import './section.scss'

const Section = (props) => {
    const {
        className,
        title,
        tittleId,
        description,
        children,
        actions,
        isActionsHiddenOnMobile,
        flexPosition 

    } = props

    return (
        <>
        <section className= {classNames(className, 'section container')} aria-label={tittleId}>
        <div className="section__nav nav">
            <div className="nav__text text">
            <div className="text__title h3" id = {tittleId}>
                <p>{title}</p>
            </div>
            { description && (
                <div className="text__description">
                <p>{description}</p>
            </div>
            )}
            </div>
           {actions &&(
             <div className={classNames('nav__actions', {'hidden-mobile':isActionsHiddenOnMobile
             },`nav__actions--${flexPosition}`)}>
                {actions}
             </div>  
           )} 
        </div>
        <div className="section__body">
               {children}
        </div>
       
        </section>
        </>
    )
}



export default Section