import Slider from '@/components/Slider'
import './MoviesSliderMain.scss'
import MoviesSlide from './MoviesSlide'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
const SliderParams = {
    slidesPerView : 1,
    slidesPerGroup : 1,
    spaceBetween : 30,
    breakpoints: {
        1024: {
            allowTouchMove: false,
        }
    }
   
}

const SlideCollections = [
    {
        title: 'Avengers: EndGame ',
        description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
        image: '/src/assets/images/MoviesSlider/Slide1.png'
    },
    {
        title: 'Avengers: Infinity WAR ',
        description: 'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос.',
        image: '/src/assets/images/MoviesSlider/Slide2.png'
    },
    {
        title: 'Avengers: Doomsday ',
        description: 'Будущий американский художественный фильм, основанный на комиксах Marvel о приключениях команды супергероев Мстителей. Кинокомикс станет пятым по счёту фильмом в серии о Мстителях, продолжением ленты «Мстители: Финал»,',
        image: '/src/assets/images/MoviesSlider/Slide3.png'
    },
    {
        title: 'Avengers: Secret War ',
        description: 'Предстоящий фильм 6-й фазы Кинематографической вселенной Marvel, который завершит Сагу о Мультивселенной.',
        image: '/src/assets/images/MoviesSlider/Slide4.png'
    },

]
const MoviesSliderMain = () => {
    const titleId = 'movies-banner-title';
    return (
        <>
        <section className='container movies' aria-labelledby={titleId}>

        <h1 className="visually-hidden" id={titleId}> Movies & Shows </h1>

        <Slider sliderParams = {SliderParams}  >
        {SlideCollections.map((Slide,index) => (
            <MoviesSlide 
            imgMovies = {Slide.image}
             title = {Slide.title}
             description = {Slide.description}
             key={index}
             />
        ))}
       
        </Slider>
        </section>
        
        </>

    )
}

export default MoviesSliderMain