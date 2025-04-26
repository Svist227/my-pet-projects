
import 'swiper/css'
import './slider.scss';
import SliderNavigation from './components/SliderNavigation';
import classNames from 'classnames';

const defaultSliderParams = {
    slidesPerView : 5,
    slidesPerGroup : 5,
    spaceBetween : 30,
    breakpoints: {
        0:{
            slidesPerView : 1,
            slidesPerGroup : 1,
        },
        481: {
            slidesPerView : 3,
            slidesPerGroup : 3,
        },
        768: {
            slidesPerView : 4,
            slidesPerGroup : 4,
            spaceBetween: 20,
        },  
        1024 : {   // и шире 
        spaceBetween: 20,
        allowTouchMove: false, // отключение свайпанья по слайдам
        },
        1441: {
        spaceBetween: 30,
        allowTouchMove: false
        },  

    }
}
const Slider = (props) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderParams = defaultSliderParams,
        isBeyondTheViewportOnMobileS, // находится ли слайдер за пределами вью-та на мобиле
        hasScrollBar,
        isNavigationHiddenMobile = true,

    } = props
    return (
        
        <div className={classNames('slider', {
            'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS //класс будет если значение не ложно
        })} 
        data-js-slider={JSON.stringify({sliderParams,navigationTargetElementId})} >
        <div className="slider__swiper swiper" data-js-slider-swiper=''>
            <ul className=" slider__list swiper-wrapper">
                {children.map((slide,index) => (
                    <li key={index} className='swiper-slide slider-item'>{slide}</li>
                ))}
            </ul>
        
        </div>
        {!navigationTargetElementId && (
            <SliderNavigation className='slider__navigation' 
            mode = 'tile'
    isHiddenMobile= {isNavigationHiddenMobile}
            />
        )}
        {hasScrollBar && (
            <div className='slider__scrollbar visible-mobile'
            data-js-slider-scrollbar=''/>
        )}
        </div>
        
    )
}

export default Slider