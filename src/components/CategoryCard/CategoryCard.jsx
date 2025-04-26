import { Image } from 'minista'
import Icon from '../Icon'
import './CategoryCard.scss'
import Badge from '../Badge'
import Button from '../Button/Button'
const CategoryCard = (props) => {
    const {
    className,
    title,
    images = [],
    badge,
    buttons,
    description
   

    } = props
    return (
        <>
        <a className='section-card'>
        <div className='categories__cont'>
           {images.map((imgsrc, index) => (
                <Image src= {imgsrc} key={index} className='categories__cont-image'/>

               
           )

           )}
        </div>
        <div className='categories__body'>
        <div className='categories__title'><h3 className='categories__title-contt'>
            {badge && (
                <Badge mode='accent' className='category-badge' isBig>
                {badge}
            </Badge>
        )}
            {title && (<span>{title}</span>)}
            {buttons && (
                buttons.map((button,index) => (
                    <Button key={index} label={button.info} mode='black-08' infoMovies='info' iconName={button.imgSvg} hasFill IconPosition='before'/>
                    ))
            )}
            {description && (
                <Button label={description} mode='black-08' infoMovies='info'/>
            )}
            </h3>
            </div>
        {title && (
             <Icon className='categories__icon' name='arrow-right'/>  
        )}
        </div>
       </a>
        
        </>
    )
}

export default CategoryCard