import React, { Suspense } from 'react';
import ApplicationsState from '../components/ApplicationsState';
import ApplicationsList from '../components/ApplicationsList';
import AuthHook from '../hooks/AuthHook';
import { applicationsPromise } from '../Api/applicationsAPI';

const MyApplications = () => {
    const {user}=AuthHook()
    return (
        <div>
            <ApplicationsState></ApplicationsState>
           <Suspense fallback={<p>Loading applicatoins list......</p>}>
             <ApplicationsList applicationsPromise={applicationsPromise(user.email)}></ApplicationsList>
           </Suspense>
        </div>
    );
};

export default MyApplications;