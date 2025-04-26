import classNames from 'classnames'
import './Badge.scss'
import Icon from '../Icon'


const Badge = (props) => {
    const {
        className,
        // default | accent
        mode='',
        isBig = false, //отступы
        children,
        iconName,
        hasFillIcon,
        iconAriaLabel, //аксесабилити 
    } = props
    
    return (
        <div className={classNames(className, 'badge', {
            [`badge--${mode}`]: mode,
            'badge--big': isBig,
        })}>
            {iconName && (
                <Icon
                className='badge__icon'
                name = {iconName}
                hasFill={hasFillIcon}
                ariaLabel={iconAriaLabel}
                hasFillIcon

                />
                )}
           <span>{children}</span>
        </div>
    )
}

export default Badge