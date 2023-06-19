import HeroAdmission from '@/components/admission/hero'
import JoinAdmission from '@/components/admission/join'
import Together from '@/components/landingPage/together'
import React from 'react'

const Admission = () => {
  return (
    <main>
      <HeroAdmission/>
      <JoinAdmission/>
      <Together/>
    </main>
  )
}

export default Admission