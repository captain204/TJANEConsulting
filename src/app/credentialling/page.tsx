"use client"

import CredentialingScreen from '@/components/CredentialingScreen/CredentialingScreen'
import CredentialingHeroPage from './Hero'

const page = () => {
  return (
    <div>
        <CredentialingHeroPage />
        <CredentialingScreen />
    </div>
  )
}

export default page