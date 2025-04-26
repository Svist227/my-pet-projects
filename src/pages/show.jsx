
import ReviewCard from "@/components/ReviewCard"
import MovieDetails from "@/sections/MovieDetails"
import MoviesSlide from "@/sections/MoviesSliderMain/MoviesSlide"
import dataItems from '@/sections/MovieDetails/ShowDetailsCard'

export const metadata = {
    title: 'Show - Stranger Things',
  }

export default function () {
  const titleId = 'show-banner-title'
    return (
      <>
        <section className="container">
       <MoviesSlide 

       title = 'Stranger Things' 
       titleId = {titleId}
       description = 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'
       imgMovies = '/src/assets/images/Show/StrangerThings.png'
       isSmallPaddingY
       />
       </section>

       <MovieDetails moviesDetailsCard={dataItems}
        castSliderNavigationId = 'movie-card-slider-navigation'
        castSliderNavigationId2 = 'movie-card-slider-reviews-navigation'
       shows

      >
        
       </MovieDetails>
       
      
      
       
      </>
    )
  }
  