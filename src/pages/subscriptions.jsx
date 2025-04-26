import Plans from "@/sections/Plans/plans"
import PlansComparison from "@/sections/PlansComparison"

export const metadata = {
    title: 'Subscriptions',
  }

export default function () {
    return (
      <>
      <Plans/>
      <PlansComparison/>
      </>
      
    )
  }