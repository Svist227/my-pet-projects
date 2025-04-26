import './Icon.scss'
import classNames from 'classnames'
import {Icon as MinistaIcon} from 'minista'



const Icon = (probs) => {
    const {
        className,
        name,
        hasFill = false,
        ariaLabel
        
    } = probs

    return (
        <span className= {classNames(className, 'icon')}
        aria-label={ariaLabel}
        >

            <MinistaIcon iconId={name}
            fill={hasFill ? 'currentColor' : 'none'}
            stroke={hasFill ? 'none' : 'currentColor'} />

        </span>
    )

}
export default Icon