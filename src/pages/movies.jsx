import MoviesSliderMain from "@/sections/MoviesSliderMain"
import Collections from "@/sections/Collections"
import CollectionSliders from "@/sections/Collections/CollectionsCard"
export const metadata = {
    title: 'Movies & Shows',
  }
export default function () {
    return (
      <>
      
       <MoviesSliderMain/>
       <Collections 
    
        collection={CollectionSliders}
       >
       </Collections>
      
       
      </>
    )
  }
  
