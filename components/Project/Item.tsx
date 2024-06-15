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

import { useEffect, useRef } from "react";
export default function Item({ job, index, selected, setSelected }) {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const videoControls = useAnimation();
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);
  return (
    <motion.div
      layoutId={`project-${index}`}
      key={job.title}
      className={`${styles.row_container} ${styles.project_container} `}
      onClick={() => setSelected(selected === index ? -1 : index)}
      onHoverStart={() => {
        if (selected !== -1) return;
        setIsHover(true);
        videoControls.start({
          opacity: 0.8,
        });
        controls.start({
          opacity: 1,
          y: 0,
        });
      }}
      onHoverEnd={() => {
        controls.start({ opacity: 0, y: "200%" });
        setIsHover(false);
        videoControls.start({
          opacity: 1,
        });
      }}
    >
      <motion.div
        animate={controls}
        layoutId={`project-content-${index}`}
        className={styles.project_content}
        style={{ opacity: 0, y: "200%", zIndex: 100 }}
      >
        <motion.div
          layoutId={`project-title-${index}`}
          className={styles.project_title}
        >
          Seatalk Chatbot
        </motion.div>
        <motion.div
          layoutId={`project-des-${index}`}
          className={styles.project_description}
        >
          Using seatalk and airflow build message chatbot for logistic team!
        </motion.div>
        <motion.div
          layoutId={`project-tech-stacks-${index}`}
          className={styles.row_container}
          style={{ flexWrap: "wrap" }}
        >
          {job.tech.map((tech, desIndex) => (
            <motion.div
              layoutId={`project-tech-stack-${index}-${desIndex}`}
              key={tech}
              className={styles.project_tech_stack}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.video
        animate={videoControls}
        className={styles.project_video + " " + (isHover ? styles.hover : "")}
        layoutId={`project-video-${index}`}
        ref={videoRef}
        src="567.mov"
        muted
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
      />
    </motion.div>
  );
}
