import './MovieDetails.scss'
import ReviewCard from '@/components/ReviewCard'
import Slider from '@/components/Slider'

import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Button from '@/components/Button/Button'
import RatingView from '@/components/RatingView/RatingView'
import Tags from '@/components/Tags'
import PersonCard from '@/components/PersonCard/PersonCard'
import { Image } from 'minista'
import Icon from '@/components/Icon'
import Seasons from '@/components/Seasons'
const defaultSliderParams = {
  slidesPerView : 8,
  slidesPerGroup : 8,
  spaceBetween : 30,
  breakpoints: {
      0:{
          slidesPerView : 3,
          slidesPerGroup : 3,
      },
      481: {
          slidesPerView : 4,
          slidesPerGroup : 4,
      },
      768: {
          slidesPerView : 4,
          slidesPerGroup : 4,
          
      },  
      1024 : {   // и шире 
      spaceBetween: 10,
      allowTouchMove: false, // отключение свайпанья по слайдам
      },
      1441: {
      spaceBetween: 20,
      allowTouchMove: false
      },  

  }
}
const defaultSliderParams2 = {
  slidesPerView : 2,
  slidesPerGroup : 2,
  spaceBetween : 30,
  breakpoints: {
       
      0 : {   // и шире 
      spaceBetween: 10,
      allowTouchMove: false, // отключение свайпанья по слайдам
        slidesPerView : 1,
        slidesPerGroup : 1,
          
      },

      1024: {
        slidesPerView : 2,
        slidesPerGroup : 2,
        spaceBetween: 20,
      }
      

  }
}
const MovieDetails = ({ moviesDetailsCard = {} }, props) => {
 
  const { imgSrc = [], reviews = [], information, seasons,
    sliderId
  } = moviesDetailsCard;

  
    const titleId = 'movie-details-title'
    const castSliderNavigationId = sliderId[0]
    const castSliderNavigationId2 = sliderId[1]
    console.log(castSliderNavigationId, 'и ',castSliderNavigationId2)

    return (
        <>
         <section className="movie-details container"
         aria-labelledby={titleId}>
            <div className="movie-details__main">
           {seasons && (
             <div className="movie-details-panel description movie-details-panel--description">
             <div className="movie-details__group">
             <h2 className='movie-details__title h4'>
             Seasons and Episodes
             </h2>
             <div className="movie-details__slider">
             <Seasons seasons = {seasons}/>
             </div>
             </div>
           </div>
           )}
          <div className="movie-details-panel description movie-details-panel--description">
            <div className="movie-details__group">
            <h3 className='movie-details__title h6'>
                Description
            </h3>
            <div className="movies-details__description">
            <p className='h6'> A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
            </div>
          </div>
          <div className="movie-details-panel cast">
          <div className="movie-details__group">
          <header className="movie-details__panel-header">
          <h3 className='movie-details__title h6'>
                Cast
            </h3>
            <SliderNavigation
            mode = 'rounded'
            id = {castSliderNavigationId} //связка со слайдером
            hasPagination = {false}
            />
          </header>
          <div className="movie-details__slider">
             <Slider
             sliderParams = {defaultSliderParams}
             navigationTargetElementId = {castSliderNavigationId}
             hasScrollBar = {false}

             >
              {imgSrc.map((slide, index) => (
    
      <div key={index}>
        <img src={slide} alt={slide} />  
        {/* Image почему то не прогружает фотки каста на сериалах */}
      </div>
    
  ))}
              </Slider>   
            </div>
          </div>
          </div>
          
          <div className="movie-details-panel reviews">
          <div className="movie-details__group">
      
         
          <header className="movie-details__panel-header">
          <h3 className='movie-details__title h6'>
                Reviews
            </h3>
           <Button label='Add Your Review' iconPosition='before' iconName='add' href = '/' mode='black-08'/>
          </header>
          <div className="movie-details__slider">
             <Slider
             sliderParams = {defaultSliderParams2}
             navigationTargetElementId = {castSliderNavigationId2}
             isNavigationHiddenMobile = {false} 
             hasScrollBar = {false}

             >
              {reviews.map((slide, index) => (
                <ReviewCard key={index} {...slide}  />
              ))}
              </Slider>   
              </div>
              <SliderNavigation
            mode = 'rounded'
            id = {castSliderNavigationId2} //связка со слайдером
            hasPagination = {true}
            >

            </SliderNavigation>
            
          </div>
        
          </div>
          </div>
          
          
          <aside>
          <div className="movie-details-panel aside2">
          <div className="movie-details__group">
           <div className="movie-details__aside">
           <div className="movie-details__aside-element">
                <h3 className='movie-details__title h6'>
                    <Icon name = 'calendar'/>
                   <span> Released Year</span>
                </h3>
                <div className="movies-details__description">
                  <time className='h6' dateTime={2022}>2022</time>
                </div>
            </div>
            <div className="movie-details__aside-element">
                <h3 className='movie-details__title h6'>
                  <Icon name = 'translate'/>
                <span>Available Languages</span>
                </h3>
                <div className="movie-details__description">
                <div className="tags">
                {information.AvailableLanguages.map((tag, index) => (
                  <Tags key = {index} tag = {tag}/>
 
                ))}
                </div>
                </div>
            </div>
            <div className="movie-details__aside-element">
                <h3 className='movie-details__title h6'>
                  <Icon name = 'rating'/>
               <span> Ratings</span>
                </h3>
                <div className="movie-details__description">
                 <div className="movie-details__rating">
                 {information.Ratings.map((rating, index) => (
                  <div key={index} className='movie-details__rating-element container'> 
                  <p className='h6'>{rating.name}</p>
                  <RatingView value = {rating.rating }label = {rating.rating}/>
                  </div>
                 ))}
                 </div>
                </div>
            </div>
            <div className="movie-details__aside-element">
                <h3 className='movie-details__title h6'>
                  <Icon name = 'gernes'/>
               <span> Gernes</span>
                </h3>
                <div className="movie-details__description">
                <div className="tags">
                {information.Gernes.map((tag, index) => (
                  <Tags key = {index} tag = {tag}/>
 
                ))}
                </div>
                </div>
            </div>
          

            {information.Person.map((person,index) =>(
                <div className="movie-details__aside-element">
                <h3 className='movie-details__title h6'>
                {person.post}
                </h3>
                <div className="movie-details__description">
                  <PersonCard {...person}/>
                </div>
              </div>
            ))}
          
                
            

           </div>

          </div>  
          </div>
          </aside>
        </section>
        </>
    )
}
export default MovieDetails