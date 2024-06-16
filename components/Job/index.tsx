import { useState } from "react";
import styles from "./Job.module.css";
import { jobExperience, techStack } from "../../config/text";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  LayoutGroup,
  scroll,
  useMotionValueEvent,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";
export default function Job({ controls }) {
  const { scrollY } = useScroll();

  return (
    <motion.div
      animate={controls}
      className={styles.container}
      style={{ opacity: 0 }}
    >
      <h1 className={styles.topic}>Experience</h1>

      {jobExperience.map((job, index) => (
        <motion.div
          layoutId={`item-${index + 1}`}
          key={job.title}
          className={`${styles.row_container} ${styles.job_container}`}
          style={{ alignItems: "baseline" }}
        >
          <div className={styles.job_duration}>{job.duration}</div>
          <div className={styles.column_container}>
            <div className={styles.job_title}>{job.title}</div>
            {job.descriptions.map((des, i) => (
              <div key={des} className={styles.job_des}>
                {`${i + 1}.  ${des}`}
              </div>
            ))}
            <div className={`${styles.row_container} ${styles.job_skills}`}>
              {job.tech.map((skill) => (
                <div key={skill} className={styles.job_skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
