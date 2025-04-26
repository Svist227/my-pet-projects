import './Tabs.scss'
import Button from '../Button/Button'
import classNames from 'classnames'

import getTabsElementsIdsFromTitle from './getTabsElementsIdsFromTitle'
import TabsNavigation from './components'
const Tabs = (props) => {
    const {
    className,
    title,
    items,
    navigationTargetElementId = 0,
    isEnableOnlyOnMobile = false,
    } = props
    return (
        <div className={classNames(className,'tabs', {
            'tabs--enable-only-on-mobile': isEnableOnlyOnMobile,
        })} data-js-tabs={JSON.stringify({
            navigationTargetElementId
        })}>

        {!navigationTargetElementId && (<TabsNavigation title = {title} items={items}/>)}
        <div className='tabs__body'>
            {items.map((item, index) => {
                const {
                    title,
                    children,
                    isActive
                } = item

              const {buttonId, contentId} = getTabsElementsIdsFromTitle(title) // для людей с ограниченными возможностями
                return (
                <div className={classNames(className,'tabs__content', {
                    'is-active':isActive
                })} 
                    id = {contentId}
                    aria-labelledby={buttonId}
                   tabIndex={0}
                   data-js-tabs-content = ''
                   key={index}
                   > 
                   {children}
                    </div>
                )
            })}
        </div>
        {/* <Button label = 'Monthly'  mode = 'transparent'buttonBox className='is-active'></Button>
        <Button label = 'Yearly' mode='transparent' buttonBox></Button> */}
         </div>
    )
}


export default Tabs