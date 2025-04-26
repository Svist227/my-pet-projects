import Button from '../Button/Button'
import './PlanCard.scss'

const PlanCard = (props) => {
    const {
        title,
        description,
        price,
        period
        
    } = props
    return (
        
        <>
        <div className='section-plan'>
            <div className='section-plan__body'>
        <div className="section__title">
            <div className="section__title-top h4">{title}</div>
            <div className="section__title-bottom"><p>{description}</p></div>
        </div>
        <div className="section__price"><p><span className='h2'>{price}</span>{period}</p></div>
        <div className="section__actions">
            <Button label='Start Free Trial' mode='black-08'></Button>
            <Button label= 'Choose Plan'></Button>
        </div>
        </div>
        </div>
        </>
        
    )
}
export default PlanCard