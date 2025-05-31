import React, { useState } from "react";

const AutoForm = () => {
  const [data, setData] = useState({
    title: "",
    location: "",
    jobType: "",
    category: "",
    applicationDeadline: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    company: "",
    hr_email: "",
    hr_name: "",
    company_logo: "",
  });

  const [rawJson, setRawJson] = useState("");

  const handlePaste = () => {
    try {
      const json = JSON.parse(rawJson);
      setData({
        title: json.title || "",
        location: json.location || "",
        jobType: json.jobType || "",
        category: json.category || "",
        applicationDeadline: json.applicationDeadline || "",
        salaryMin: json.salaryRange?.min || "",
        salaryMax: json.salaryRange?.max || "",
        description: json.description || "",
        company: json.company || "",
        hr_email: json.hr_email || "",
        hr_name: json.hr_name || "",
        company_logo: json.company_logo || "",
      });
    } catch (err) {
      alert("Invalid JSON!");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <textarea
        className="w-full border p-2 rounded"
        rows={8}
        placeholder="Paste full JSON data here"
        value={rawJson}
        onChange={(e) => setRawJson(e.target.value)}
      />
      <button
        onClick={handlePaste}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Fill Form
      </button>

      {/* Input Fields */}
      <input className="border w-full p-2" value={data.title} placeholder="Title" readOnly />
      <input className="border w-full p-2" value={data.location} placeholder="Location" readOnly />
      <input className="border w-full p-2" value={data.jobType} placeholder="Job Type" readOnly />
      <input className="border w-full p-2" value={data.category} placeholder="Category" readOnly />
      <input className="border w-full p-2" value={data.applicationDeadline} placeholder="Deadline" readOnly />
      <input className="border w-full p-2" value={data.salaryMin} placeholder="Salary Min" readOnly />
      <input className="border w-full p-2" value={data.salaryMax} placeholder="Salary Max" readOnly />
      <input className="border w-full p-2" value={data.description} placeholder="Description" readOnly />
      <input className="border w-full p-2" value={data.company} placeholder="Company" readOnly />
      <input className="border w-full p-2" value={data.hr_email} placeholder="HR Email" readOnly />
      <input className="border w-full p-2" value={data.hr_name} placeholder="HR Name" readOnly />
      <input className="border w-full p-2" value={data.company_logo} placeholder="Company Logo URL" readOnly />
    </div>
  );
};

export default AutoForm;
