"use client"

import BillingServicesScreen from '@/components/BillingServicesScreen/BillingServicesScreen'
import BillingServicesHeroPage from '@/components/BillingServicesScreen/BillingServicesScreenHero'
import React from 'react'

const page = () => {
  return (
    <div>
 <BillingServicesHeroPage />
       <BillingServicesScreen />
    </div>
  )
}

export default page