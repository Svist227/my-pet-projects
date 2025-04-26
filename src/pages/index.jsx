import Categories from "@/sections/Categories"
import Devices from "@/sections/Devices"
import Hero from "@/sections/Hero"
import Section from "@/layouts/Section"
import Questions from "@/sections/Questions"
import Plans from "@/sections/Plans/plans"
import Banner from "@/sections/Banner"
export const metadata = {
  title: 'Home',
  isHeaderFixed: true,

}
export default function () {
  
  return (
    <>
     <Hero title='The best Streaming Experience' 
     description="StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."
     isSvg/>
     <Categories/>
     <Devices/>
     <Questions/>
     <Plans/>

    </>
  )   
}
