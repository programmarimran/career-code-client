import React, { Suspense } from 'react';
import AuthHook from '../hooks/AuthHook';
import MyPostedJobList from '../components/MyPostedJobList';
import { jobCreatedByPromise } from '../Api/JobsApi';

const MyPostedJobs = () => {
    const {user}=AuthHook()
    return (
        <div>
         <Suspense>
            <MyPostedJobList jobCreatedByPromise={jobCreatedByPromise(user?.email)}>

            </MyPostedJobList>
         </Suspense>
        </div>
    );
};

export default MyPostedJobs;