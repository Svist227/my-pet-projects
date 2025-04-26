import classNames from 'classnames'
import './SliderNavigation.scss'
import Button from '@/components/Button/Button'
const SliderNavigation = (props) => {
   const  {
    classname,
    id,
    hasPagination = true, // есть ли пагинация
    // defoult / tile / rounded(круглые перекл)
    mode = '',
    isHiddenMobile,

    } = props

    return (
        <>
        <div className= {classNames(classname, 'slider-navigation', {
            [`slider-navigation--${mode}`]: mode,            
            'hidden-mobile': isHiddenMobile,            

        })}
        id = {id}
        data-js-slider-navigation = ''
        style={{'--displayNavigation': `${mode=== 'rounded' ?  'center' : 'space-between'}`}}
        >
            
            <Button className='slider-navigation__arrow-button slider-navigation__arrow-button-previous'
             mode = {'black-10'}
            iconName= 'arrow-left'
            label = 'Previous slide'
            isLabelHidden
            extraAttrs = {{
                'data-js-slider-previous-button': '',
            }}
            >

            </Button>

            {hasPagination && (
                <div className="slider-navigation__pagination" 
                data-js-slider-pagination=''/>
            )}
            <Button className='slider-navigation__arrow-button slider-navigation__arrow-button-next'
            mode = {'black-10'}
            iconName= 'arrow-right'
            label = 'Next slide'
            isLabelHidden
            extraAttrs = {{
                'data-js-slider-next-button': '',
            }}
            >
            

            </Button>
        
        </div>
        </>
    )
}

export default SliderNavigation