import Support from "@/sections/Support"
import Questions from "@/sections/Questions"
export const metadata = {
    title: 'Support',
  }

export default function () {
    return (
      <>
        <Support title = 'Welcome to our support page!'
        description = "We're here to help you with any problems you may be having with our product."/>
         <Questions/>
      </>
      
    )
  }