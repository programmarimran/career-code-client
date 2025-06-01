import React, { use } from "react";
import { Link } from "react-router";

const MyPostedJobList = ({ jobCreatedByPromise }) => {
  const jobs = use(jobCreatedByPromise);
  console.log(jobs);
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Job type</th>
              <th>View applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job,index) => (
              <tr key={index}>
                <th>{index+1}</th>
                <td>{job.title||"nope"}</td>
                <td>{job.category|| "nope"}</td>
                <td>{job.jobType|| "nope"}</td>
                 <td className=" btn"><Link to={`/applications/job/${job._id}`}>View Applications</Link></td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobList;
