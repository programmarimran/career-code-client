import React from "react";
import { motion } from "motion/react";
import photo1 from "../assets/hero/team1.jpg";
import photo2 from "../assets/hero/team2.jpg";
const Hero = () => {
  return (
    <div className="hero bg-base-200 border h-[500px] rounded-2xl my-8 ">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="  justify-end flex-1 flex flex-col items-center">
          <div className=" max-w-[200px]">
            <motion.img
              animate={{
                y: [100,40, 100],

                transition: { duration: 8, repeat: Infinity },
              }}
              src={photo1}
              className=" w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className=" max-w-[200px]">
            <motion.img
              animate={{
                x: [100,50, 100],
        

                transition: { duration: 10, repeat: Infinity },
              }}
              src={photo2}
              className=" w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="  flex-1 mx-auto">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { repeat: Infinity, duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: [
                  "#e35a3d",
                  "#81e33d",
                  "#3db5e3",
                  "#8a807f",
                  "#e3473d",
                  "#3d66e3",
                ],
                rotate: 180,
                x: 200,
                y: 500,
                transition: { repeat: Infinity, duration: 2 },
              }}
            >
              job
            </motion.span>{" "}
            for you!
          </motion.h1>
          <h1>Remote job for you!! </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
