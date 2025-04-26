import './Collections.scss'

import Section from "@/layouts/Section"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import categoryItems from "@/sections/Categories/categoriesItems"
import CategoryCard from "@/components/CategoryCard"
import Button from '@/components/Button/Button'
import Tabs from '@/components/Tabs'
import movies from '@/pages/movies'
import TabsNavigation from '@/components/Tabs/components'
import ButtonTabMovies from './ButtonTabMovies'
import classNames from 'classnames'
import getIdFromTitle from '@/utils/getIdFromTitle'
import MovieCard from '@/components/MovieCard'


const Collections = (props) => {
    const  {
        collection,
        number = 0,
        
    } = props
    
   
    
      // const buttonLapDask =  <Button label={title} className='collections__button'/> 
      // const buttonMobile =  <TabsNavigation id = {tabsNavigationId}
      // title={title}
      // items = {collection}
      // width50/>

      
    
    const tabsTitle = 'movies-tabs'
    const tabsNavigationId = 'movies-tabs-navigation'
    return (
            <div className="collections">
            <div className={classNames('collections__title container'
             )} 
            data-js-changeContent=''>
                
                <TabsNavigation id = {tabsNavigationId}
                title={'Movies'}
                items = {collection}
                className= 'visible-mobile'
                width50
                />
                

            </div>
          
            <Tabs
            title = {tabsTitle}
            isEnableOnlyOnMobile
            navigationTargetElementId = {tabsNavigationId}
            items = {collection.map((content, index) => ({
              title:content.title,
              isActive : content.isActive,
              children : (
                 <div className='collections__group' key={index}>
                  <Button label={content.title} className='collections__button hidden-mobile'/>
                     {content.inner.map((slider,index2)=> {
                      const {
                        title,
                        slides,
                        sliderParams,
                        movieItems,
                      } = slider 
                      const titleFormated = `${getIdFromTitle(content.title)}-${getIdFromTitle(title)}` //аксесабилити и уник if
                      const titleId = `${titleFormated}-title`  //аксесабилити и id
                      const SliderNavigationId = `${titleFormated}-slider-navigation`  //аксесабилити и id
                      return (
                 <Section title={title}
                 className='collections__section'
                 titleId = {titleId}
                 actions = {(
                   <SliderNavigation id= {SliderNavigationId} mode = 'tile'/>
               )} 
               isActionsHiddenOnMobile //скрытие слайдера )()
               key={index}
               >
                 <Slider   navigationTargetElementId={SliderNavigationId}
                 sliderParams = {sliderParams}
                 isBeyondTheViewportOnMobileS

                 >
                
                  {slides?.map((card,index) => (
                    <CategoryCard  key={index} {...card}  ></CategoryCard>
        
                ))?? movieItems?.map((movieItem,index) => (
                  <MovieCard  key={index} {...movieItem}  ></MovieCard>
      ))
                 
               }
                 
               
                 </Slider>
               </Section>
                      )
            })} 
                 </div>
              )
            }))}
            >

            </Tabs>
        </div>
    )
}
export default Collections