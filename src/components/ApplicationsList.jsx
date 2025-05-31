import React, { use } from "react";
import TableTr from "./TableTr";

const ApplicationsList = ({ applicationsPromise }) => {
  const applications = use(applicationsPromise);
  console.log(applications)
  return (
    <>
      <div className=" text-center text-2xl">
        this is applications list {applications.length}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <TableTr
                index={index}
                key={application._id}
                application={application}
              ></TableTr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApplicationsList;
