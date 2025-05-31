import React, { Suspense } from "react";
import Hero from "../components/Hero";
import HotJobs from "../components/HotJobs";
import AutoForm from "../components/AutoForm";

const Home = () => {
  const jobPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json()
  );

  return (
    <div>
      <Hero></Hero>
      <Suspense>
        <HotJobs jobPromise={jobPromise}></HotJobs>
      </Suspense>
      <AutoForm></AutoForm>
    </div>
  );
};

export default Home;
