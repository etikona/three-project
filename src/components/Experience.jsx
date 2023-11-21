import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";

import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I done so far</p>
        <h2 className={styles.sectionHeadText}>Working Experience</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
