import React, { use } from 'react'
import JobsCard from '../common/JobsCard';

const HotJobs = ({jobsPromise}) => {

  
  // Don't render anything if there's no Promise yet
  if (!jobsPromise) {
    return <div>Loading jobs...</div>
  }
  
  // Only call use() when we have a valid Promise
  const jobs = use(jobsPromise)
  
  return (
    <div className='flex flex-wrap justify-center gap-4 my-10'>
      {/* Render your jobs here */}
      {jobs?.map((job) => (
        <JobsCard key={job._id} job = {job} />
      ))}
    </div>
  )
}

export default HotJobs