import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplications = () => {
    const applications=useLoaderData()
    console.log(applications)
    return (
        <div>
            this is view applications {applications.length}
        </div>
    );
};

export default ViewApplications;