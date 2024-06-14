import { useState } from "react";
import styles from "./Project.module.css";
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
export default function Project({ controls____ }) {
  const { scrollY } = useScroll();

  const [selected, setSelected] = useState(-1);
  const project = jobExperience[selected - 1];

  return (
    <motion.div
      animate={controls____}
      className={styles.container}
      style={{ opacity: 0 }}
    >
      <h1 className={styles.topic}>Project</h1>
      <LayoutGroup>
        <div className={styles.row_container}>
          {jobExperience.map((job, index) => (
            <motion.div
              layoutId={`project-${index + 1}`}
              key={job.title}
              className={`${styles.row_container} ${styles.job_container}`}
              style={{ alignItems: "baseline", backgroundColor: "wheat" }}
              onClick={() => {
                if (selected === index + 1) {
                  setSelected(-1);
                  return;
                }
                setSelected(index + 1);
              }}
            >
              <motion.div
                layoutId={`container-${index + 1}`}
                className={styles.column_container}
                style={{ width: "300px" }}
              >
                <motion.div
                  layoutId={`job-${index + 1}`}
                  className={styles.job_title}
                >
                  {job.title}
                </motion.div>
                {job.descriptions.map((des, desIndex) => (
                  <motion.div
                    layoutId={`des-${index + 1}-${desIndex + 1}`}
                    key={des}
                    className={styles.job_des}
                  >
                    {`${index + 1}.  ${des}`}
                  </motion.div>
                ))}
                <motion.div
                  layoutId={`skills-${index + 1}`}
                  className={`${styles.row_container} ${styles.job_skills}`}
                >
                  {job.tech.map((skill, skillIndex) => (
                    <motion.div
                      layoutId={`skill-${index + 1}-${skillIndex + 1}`}
                      key={skill}
                      className={styles.job_skill}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selected !== -1 && (
            <motion.div
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId={`project-${selected}`}
              key={project.title}
              className={`${styles.row_container} ${styles.job_container}`}
              style={{
                position: "fixed",
                top: "100px",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "1000px",
                height: "1000px",
                backgroundColor: "wheat",
                borderRadius: "12px",
                padding: "20px",
              }}
              onClick={() => setSelected(-1)}
            >
              <motion.div
                layoutId={`container-${selected}`}
                className={styles.column_container}
              >
                <motion.div
                  layoutId={`job-${selected}`}
                  className={styles.job_title}
                >
                  {project.title}
                </motion.div>
                {project.descriptions.map((des, desIndex) => (
                  <motion.div
                    layoutId={`des-${selected}-${desIndex + 1}`}
                    key={des}
                    className={styles.job_des}
                  >
                    {`${selected + 1}.  ${des}`}
                  </motion.div>
                ))}
                <motion.div
                  layoutId={`skills-${selected}`}
                  className={`${styles.row_container} ${styles.job_skills}`}
                >
                  {project.tech.map((skill, skillIndex) => (
                    <motion.div
                      layoutId={`skill-${selected}-${skillIndex + 1}`}
                      key={skill}
                      className={styles.job_skill}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
