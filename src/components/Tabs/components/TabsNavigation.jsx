import getIdFromTitle from '@/utils/getIdFromTitle'
import './TabsNavigation.scss'
import classNames from 'classnames'
import getTabsElementsIdsFromTitle from '../getTabsElementsIdsFromTitle'
const       TabsNavigation = (props) => {
    const  {
        className,
        id,
        title,
        items=[],
        width50 = false
    } = props
    const titleFormatted = getIdFromTitle(title) // аксесабилити
    const titleId = `${titleFormatted}-title`  // аксесабилити
    return (
        <div className={classNames(className,'tabs-navigation')}
        id = {id}
        role='tablist' // аксесабилити
        aria-labelledby={titleId} // аксесабилити
        data-js-tabs-navigation= '' // переключение контента для js
        >
            <h3 className="visyally-hidden" id={titleId}>
              
            </h3>
            {items.map((item, index) => {
                const {buttonId, contentId} = getTabsElementsIdsFromTitle(item.title) // аксесабилити
                return  (
                    <div className={classNames('tabs-navigation__button', {
                        'is-active': item.isActive,
                        'width50': width50
                    })}
                    id={buttonId} 
                    aria-controls={contentId} // аксесабилити
                    role='tab' // аксесабилити
                    aria-selected = {item.isActive} // аксесабилити
                    tabIndex={item.isActive ? 0 : -1} // аксесабилити
                    data-js-tabs-button=''
                    key = {index}
                    >
                    {item.title}
                    </div>
                )
            })}
        </div>
    )
}
export default TabsNavigation