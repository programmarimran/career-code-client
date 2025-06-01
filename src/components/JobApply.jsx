import React from "react";
import { Link, useParams } from "react-router";
import AuthHook from "../hooks/AuthHook";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = AuthHook();
  // console.log(user);
  const { jobId } = useParams();
  // console.log(jobId);
  const handleApplyInformaion = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedin, github, resume);
    const application = {
      status:"",
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        const data = res.data;
        if (data) {
          Swal.fire("Your Applied successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center my-12">
      <form
        onSubmit={handleApplyInformaion}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <Link
          to={`/details/${jobId}`}
          className=" btn btn-primary fieldset-legend"
        >
          Apply this job Informaion
        </Link>

        <label className="label">Linkedin</label>
        <input
          type="text"
          name="linkedin"
          className="input"
          placeholder="Linkedin url"
        />

        <label className="label">Github</label>
        <input
          type="text"
          name="github"
          className="input"
          placeholder="Github profile url"
        />

        <label className="label">Resume</label>
        <input
          type="text"
          name="resume"
          className="input"
          placeholder="Resume link"
        />
        <input className=" btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default JobApply;
