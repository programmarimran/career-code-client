import React from "react";

const AddJob = () => {
  return (
    <form>
        {/* Basic info */}
        <legend>Basic Info</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Add Job</legend>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       <div>
          <label className="label">Title</label>
        <input
          type="text"
          name="title"
          className="input"
          placeholder=" Job title "
        />
       </div>

     <div>
           <label className="label">company</label>
        <input
          type="text"
          name="company"
          className="input"
          placeholder="company name"
        />
     </div>

      <div>
          <label className="label">company location</label>
        <input
          type="text"
          name="location"
          className="input"
          placeholder="company location"
        />
      </div>
      <div>
          <label className="label">company Logo</label>
        <input
          type="text"
          name="logo"
          className="input"
          placeholder="company Logo URL"
        />
      </div>
       </div>
      </fieldset>
      {/* Job type */}
        <legend className="label">Job type</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <div className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="On-site"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="Remote"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="Hy-brid"
          />
        </div>
      </fieldset>
      {/* Job Category */}
        <legend className="label">Job category</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <select name="category" defaultValue="Pick a color" className="select">
          <option disabled={true}>Pick a color</option>
          <option>Engenering</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
      </fieldset>
      {/*Application deadline */}
        <legend className="label">Applicaton deadline</legend>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <input type="date" className="input" />
      </fieldset>
      {/* Salary Range */}
      
        <legend className="label">Salary Range</legend>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">SalaryMin</label>
          <input
            type="text"
            name="salaryMin"
            className="input"
            placeholder="Minimum Salary"
          />

          <label className="label">SalaryMax</label>
          <input
            type="text"
            name="salaryMax"
            className="input"
            placeholder="Maximum salary"
          />

          <label className="label">Currency</label>
          <select
            name="currency"
            defaultValue="Pick a color"
            className="select"
          >
            <option disabled={true}>Pick a color</option>
            <option>BDT</option>
            <option>EU</option>
            <option>USD</option>
          </select>
        </fieldset>
 
    </form>
  );
};

export default AddJob;
