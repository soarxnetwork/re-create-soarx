import React from 'react'
import ProfilePictureSection from './ProfilePictureSection'
// import ProfileTitle from './ProfileTitle'
// import ProfileSummary from './ProfileSummary'
// import ProfileEducation from './ProfileEducation'
// import ProfileExperience from './ProfileExperience'
// import ProfileSkills from './ProfileSkills'
// import ProfilePortfolio from './ProfilePortfolio'
// import ProfileProjects from './ProfileProjects'
// import ProfileCertifications from './ProfileCertifications';

function ProfileSection() {
  return (
    <div className=''>
        <ProfilePictureSection />
        {/* <ProfileTitle /> */}
        <div className='space-y-10'>
        {/* <ProfileSummary />
        <ProfileEducation />
        <ProfileExperience />
        <ProfileSkills />
        <ProfilePortfolio />
        <ProfileProjects />
        <ProfileCertifications /> */}
        </div>
    </div>
  )
}

export default ProfileSection