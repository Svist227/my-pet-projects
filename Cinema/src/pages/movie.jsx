
import ReviewCard from "@/components/ReviewCard"
import MovieDetails from "@/sections/MovieDetails"
import MoviesSlide from "@/sections/MoviesSliderMain/MoviesSlide"
import dataItems from '@/sections/MovieDetails/MoviesDetailsCard'

export const metadata = {
    title: 'Movies - Kantara',
  }

 
export default function  Movie() {
  const titleId = 'movie-banner-title'
    return (
      <>  
        <section className="container">
       <MoviesSlide 
       
       title = 'Kantara' 
       titleId = {titleId}
       description = 'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'
       imgMovies = '/src/assets/images/Movie/Cantavra.png'
       isSmallPaddingY
       />
       </section>

       <MovieDetails
        moviesDetailsCard={dataItems}
        castSliderNavigationId = 'movie-card-slider-navigation'
        castSliderNavigationId2 = 'movie-card-slider-reviews-navigation'
      >
        
       </MovieDetails>
       
       
      
      
       
      </>
    )
  }
  
