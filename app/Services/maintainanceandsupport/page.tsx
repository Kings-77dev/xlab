import React from 'react'
import MaintainanceHero from './MaintainanceHero'
import ServiceOverview from './MaintainanceServicesOverview'
import IncludedServices from './IncludedMaintainanceServices'
import SLAs from './SLAs'
// import ToolsList from './ToolsList'

const page = () => {
  return (
    <div>
      <MaintainanceHero />
      <ServiceOverview />
      <IncludedServices />
      {/* <PricingTable />
      <ProcessSteps /> */}
      {/* <ToolsList /> */}
      <SLAs />
    </div>
  )
}

export default page
