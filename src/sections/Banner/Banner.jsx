import './Banner.scss'
import Button from '@/components/Button/Button'
const Banner = () => {
    return (
        <>
        <div className='banner'>
            <div className="banner__information">
                <div className="banner__title"> <p className='h2'>Start your free trial today!</p></div>
                <div className="banner__description"> <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p></div>
            </div>
            <div className="banner__button">
                <Button label='Start a Free Trail' mode='red'/>
            </div>

        </div>
        </>
    )
}

export default Banner