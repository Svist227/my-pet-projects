import './Hero.scss'
import Button from '@/components/Button/Button'
const Hero = () => {
    return(
    <section className='hero' aria-labelledby='hero-title'>
        <div className="hero__pano">
        <div className="hero__pano-inner container">
            <button className="hero__play-button" type='button' 
            aria-label = 'Play Video' 
            title='Play Video'>
                <img src='/play.svg' className='hero__pano-button-image'alt="" width={470} height={470}/>

            </button>
        </div>
        </div>
        <div className="hero__body">
            <div className="hero__body-inner container">
            <h1 className="hero__title" id='hero-title'>
                The best Streaming Experience
            </h1>
            <div className="hero__description">
                <p>
                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                </p>
            c</div>
            <Button className='hero__button' 
            iconName='play' 
            label='Start Watching Now'
            hasFill
            >

            </Button>
            </div>

        </div>

    </section>
    )
}

export default Hero