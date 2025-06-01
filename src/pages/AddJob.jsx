import React from "react";
import AuthHook from "../hooks/AuthHook";
import { object } from "motion/react-client";
import axios from "axios";

const AddJob = () => {
  const {user}=AuthHook()
  const handleAddJob=(e)=>{
e.preventDefault()
const form=e.target;
const formData=new FormData(form);
const data=Object.fromEntries(formData.entries())
const {currency,max,min,...newJob}=data;
newJob.salaryRange={currency,max,min}
newJob.requirements=newJob.requirements.split(",").map(req=>req.trim())
newJob.responsibilites=newJob.responsibilites.split(",").map(req=>req.trim())
newJob.status="active"
console.log(Object.keys(newJob).length)
console.log(newJob)

// console.log(currency,max,min)
// console.log(newJob)
//add to database this collectionj
axios.post("http://localhost:3000/jobs",newJob)
.then(data=>{
  console.log(data.data)
  if(data.data.insertedId){
    alert("everything isOk")
  }
})
.catch(error=>{
  console.log(error)
})

  }
  return (
    <form onSubmit={handleAddJob} className=" w-4xl mx-auto my-12">
      {/* Basic info */}
      <legend>Basic Info</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <legend className="fieldset-legend">Add Job</legend>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder=" Job title "
            />
          </div>

          <div>
            <label className="label">company</label>
            <input
              type="text"
              name="company"
              className="input w-full"
              placeholder="company name"
            />
          </div>

          <div>
            <label className="label">company location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="company location"
            />
          </div>
          <div>
            <label className="label">company Logo</label>
            <input
              type="text"
              name="logo"
              className="input w-full"
              placeholder="company Logo URL"
            />
          </div>
        </div>
      </fieldset>
      {/* Job type */}
      <legend className="label">Job type</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <div className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn w-full"
            type="radio"
            name="jobType"
            value={"On_Site"}
            aria-label="On-site"
          />
          <input
            className="btn w-full"
            type="radio"
            name="jobType"
            value={"Remote"}
            aria-label="Remote"
          />
          <input
            className="btn w-full"
            type="radio"
            name="jobType"
            value={"Hy_Brid"}
            aria-label="Hy-brid"
          />
        </div>
      </fieldset>
      {/* Job Category */}
      <legend className="label">Job category</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <select name="category" defaultValue="Pick a color" className="select w-full">
          <option disabled={true}>Pick a color</option>
          <option>Engenering</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
      </fieldset>
      {/*Application deadline */}
      <legend className="label">Applicaton deadline</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <input name="applicationDeadline" type="date" className="input w-full" />
      </fieldset>
      {/* Salary Range */}

      <legend className="label">Salary Range</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <label className="label">SalaryMin</label>
        <input
          type="text"
          name="min"
          className="input w-full"
          placeholder="Minimum Salary"
        />

        <label className="label">SalaryMax</label>
        <input
          type="text"
          name="max"
          className="input w-full"
          placeholder="Maximum salary"
        />

        <label className="label">Currency</label>
        <select name="currency" defaultValue="Pick a color" className="select w-full">
       
          <option>BDT</option>
          <option>EU</option>
          <option>USD</option>
        </select>
      </fieldset>
      {/* Job Description */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <label className=" label">Job Description</label>
        <textarea
          name="description"
          className="textarea w-full"
          placeholder="Job Discription"
        ></textarea>
      </fieldset>
      {/* Job Requerements */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <label className=" label">Job Requerement</label>
        <textarea
          name="requirements"
          className="textarea w-full"
          placeholder="Job Requirements (sepered by coma)"
        ></textarea>
      </fieldset>
      {/* Job Responsibilities */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <label className=" label"> Job Responsibilities </label>
        <textarea
          name="responsibilites"
          className="textarea w-full"
          placeholder=" Job Responsibilities  (sepered by coma)"
        ></textarea>
      </fieldset>
      {/* HR Related info */}
      <legend>HR relatred Info</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <legend className="fieldset-legend">HR</legend>

        <div>
          <label className="label">HR-Email</label>
          <input
            type="text"
            defaultValue={user?.email}
            name="hr_email"
            className="input w-full"
            placeholder=" HR Email "
          />
        </div>

        <div>
          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />
        </div>
      </fieldset>
      <input type="submit" className=" btn w-full" value="Add Job" />
    </form>
  );
};

export default AddJob;
