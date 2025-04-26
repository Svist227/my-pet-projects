import Section from '@/layouts/Section'
import './plans.scss'
import Button from '@/components/Button/Button'
import PlanCard from '@/components/PlanCard'
import PlansGroup from './PlansGroup'
import Tabs from '@/components/Tabs'
import TabsNavigation from '@/components/Tabs/components'

const Plans = (props) => {

    const tabsTitle = 'plans-tabs'
    const tabsNavigationId = 'plans-tabs-navigation'

    return (
        <Section
        title = "Choose the plan that's right for you"
        description = 'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
        actions = {(
           <TabsNavigation id={tabsNavigationId} 
           title={tabsTitle} 
           items={PlansGroup}/>
        )}
       >
       
        <Tabs
        title = {tabsTitle}
        navigationTargetElementId = {tabsNavigationId}
        items={PlansGroup.map((plangroup) => ({
            title: plangroup.title,
            isActive:plangroup.isActive,
            children: (
                <div className='section-plans' container__body=''>
                {plangroup.items.map((Card,index) => (
                    <PlanCard key={index} {...Card} />
                ))}
                
                </div>
            )
        }))}
        />
        </Section>
    )
}
export default Plans