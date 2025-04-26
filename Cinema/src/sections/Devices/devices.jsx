import Section from '@/layouts/Section'
import './Devices.scss'
import Button from '@/components/Button/Button'
import Icon from '@/components/Icon'


const Screen_Resolution = [
    {
        title : 'Smartphones',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icons: 'Devices1'
    },
    {
        title : 'Tablet',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icons: 'Devices2'
    },
    {
        title : 'Smart TV',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icons: 'Devices3'
    },
    {
        title : 'Laptops',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icons: 'Devices4'
    },
    {
        title : 'Gaming Consoles',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icons: 'Devices5'
    },
    {
        title : 'VR Headsets',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icons: 'Devices6'
    },
    
]
const Devices = (props) => {
    const {
        className,
        
    } = props

    
    return (
        <>
        <Section  
        title = 'We Provide you streaming experience across various devices.'
        description = 'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
       
         > <div className='devices'>
         {Screen_Resolution.map((card,index) => (
            <div key={index } className='container devices__device '> 
            <div className='devices__device-top'>
              
                <div className='devices__device-item'>
                <Icon name={card.icons} hasFill className = 'button__icon devices__device-icon' ></Icon>
                </div>
                <div className='h4'>{card.title}</div>
            </div>
            <div className='devices__device-bottom'>{card.description}</div>
            </div>
         )
        )}
        </div>

         </Section>
        </>
    )
}

export default Devices