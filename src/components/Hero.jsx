import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row gap-5 items-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className="text-[#9153ff]">Eti</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            I develop front-end and <br className="sm:block hidden" />{" "}
            full-stack web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
