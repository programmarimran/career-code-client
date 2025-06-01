import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";

const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications);
  const handleUpdatedStatus=(value,application_id)=>{
    console.log(value,application_id)
    axios.patch(`http://localhost:3000/applications/${application_id}`,{status:value})
    .then(data=>{
        console.log(data.data)
    })
    .catch(error=>{
        console.log(error)
    })
  }
  return (
    <div>
      this is view applications {applications.length}
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
            {applications.map((application, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{application.applicant || "nope"}</td>
                <td>{application.category || "nope"}</td>
                <td>{application.jobType || "nope"}</td>
                <td>
                  <select onChange={(e)=>handleUpdatedStatus(e.target.value,application._id)} defaultValue={application.status} className="select">
                    <option value={""} disabled>Updated status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
