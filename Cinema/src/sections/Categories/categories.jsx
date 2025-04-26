import Section from '@/layouts/Section'
import './categories.scss'
import classNames from 'classnames'
import CategoryCard from '@/components/CategoryCard'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import categoryItems from './categoriesItems'
const Categories = (props) => {
        
    return (
        <>
        <Section 
        // начало props
        className = 'roo'
        title = 'Explore our wide variety of categories' 
        tittleId = 'dddd' 
        description = "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" 
        actions = {(
            <SliderNavigation id='categories-slider-navigation' mode = 'tile'/>
        )} 
         isActionsHiddenOnMobile 
         // конец props
       > 
       {/* начало children */}
        <Slider  isBeyondTheViewportOnMobileS hasScrollBar navigationTargetElementId='categories-slider-navigation'>
        {categoryItems.map((card,index) => ( 
            <CategoryCard  key={index} {...card} ></CategoryCard>  // card - объект

        ))
        } 
        {/* конец children */}
        </Slider>
        </Section>
    
        </>
    )

}

export default Categories