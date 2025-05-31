import React, { use } from 'react';
import JobCard from './JobCard';
import { div } from 'motion/react-client';

const HotJobs = ({jobPromise}) => {
    const jobs=use(jobPromise)
    
    return (
      <div>
        <h1 className=' text-5xl font-bold text-center my-8'>Hot Jobs !!</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
      </div>
    );
};

export default HotJobs;