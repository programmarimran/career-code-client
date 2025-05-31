import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CardDetails = () => {
    const job=useLoaderData()
  const { title, company_logo,company,_id,salaryRange,requirements, location, description } = job;
  return (
    <div className="card mx-auto my-12 bg-base-100 border w-96 shadow-sm">
      <div className=" flex gap-2 items-center">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h2 className="card-title">
            {company}
          </h2>
            <h1 className=" flex items-center"><FaLocationDot />{location}</h1>
        </div>
      </div>
      <div className="card-body">
      <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Salary: {salaryRange.min}-{salaryRange.max} bdt</p>
        <p>{description}</p>
        <div className="card-actions ">
          
          {
            requirements.map((req,index)=><div key={index} className="badge badge-outline">{req}</div>)
          }
        </div>
    <div className=" card-actions justify-end">
          <Link to={`/job-apply/${_id}`}><button className=" btn btn-primary">Apply</button></Link>
    </div>
      </div>
    </div>
  );
};

export default CardDetails;
