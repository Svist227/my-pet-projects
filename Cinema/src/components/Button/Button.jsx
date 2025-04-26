import './Button.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Button = (props) => {
    const {
        className,
        type = 'button', 
        href,
        target,
        // defoult / transparent
        mode = '',
        label,
        isLabelHidden = false,
        iconName,
        // before | after
        iconPosition = 'before',
        hasFill,
        extraAttrs,
        // defoult / center 
        infoMovies,
        buttonBox
    } = props

    const isLink = href !== undefined;
    const Component = isLink ? 'a': 'button';
    const LinkProbs = {href,target};
    const buttonProbs = { type };
    const specificProbs = isLink ? LinkProbs : buttonProbs;
    const title = isLabelHidden ? label : undefined;
    

    const IconComponent = iconName  &&  (
    <Icon className = 'button__icon'
    name = {iconName}
    hasFill = {hasFill}
    />

    
    )
    return(
        <Component className= {classNames(className, 'button', {
            [`button--${mode}`]: mode },
            {[`button--${infoMovies}`]: infoMovies}
         ) } 
        aria-label={title} title={title} 
        {...(buttonBox && {button_box : ''})} // добавляет атрибут для переключения кнопок

        {...specificProbs}
        {...extraAttrs}
       
        >
            {iconPosition === 'before' && IconComponent}
        {!isLabelHidden && (            
        <span className='button__label'>
            {label}
        </span>)}
        {iconPosition === 'after' && IconComponent}
         </Component>
    )
}
export default Button