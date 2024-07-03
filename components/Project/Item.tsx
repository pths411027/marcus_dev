import { useState } from "react";
import styles from "./Project.module.css";
import useStore from "../../pages/store";
import { motion, useAnimation } from "framer-motion";

import { useEffect, useRef } from "react";
export default function Item({ project, index, selected, setSelected }) {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const videoControls = useAnimation();
  const [isHover, setIsHover] = useState(false);
  const setIsLoading = useStore((state) => state.setIsLoading);
  return (
    <motion.div
      layoutId={`project-${index}`}
      key={project.title}
      className={`${styles.row_container} ${styles.project_container} `}
      onClick={() => setSelected(selected === index ? -1 : index)}
      onHoverStart={() => {
        if (selected !== -1) return;
        setIsHover(true);
        videoControls.start({
          opacity: 0.7,
          filter: "blur(3px)",
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
          filter: "blur(0px)",
        });
      }}
    >
      <motion.div
        animate={controls}
        layoutId={`project-cover-${index}`}
        className={styles.project_cover}
        style={{ opacity: 0, y: "200%", zIndex: 100 }}
      >
        <motion.div
          animate={controls}
          layoutId={`project-content-${index}`}
          className={styles.project_content}
        >
          <motion.div
            layoutId={`project_cover-${index}`}
            className={styles.project_cover}
          />
          <motion.div
            layoutId={`project-title-${index}`}
            className={styles.project_title}
          >
            {project.title}
          </motion.div>
          <motion.div
            layoutId={`project-des-${index}`}
            className={styles.project_description}
          >
            {project.des}
          </motion.div>
          <motion.div
            layoutId={`project-tech-stacks-${index}`}
            className={styles.row_container}
            style={{ flexWrap: "wrap" }}
          >
            {project.techs.map((tech, desIndex) => (
              <motion.div
                layoutId={`project-tech-stack-${index}-${desIndex}`}
                key={desIndex}
                className={styles.project_tech_stack}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.video
        animate={videoControls}
        className={styles.project_video + " " + (isHover ? styles.hover : "")}
        layoutId={`project-video-${index}`}
        ref={videoRef}
        src={project.src}
        muted
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
          setIsLoading();
        }}
      />
    </motion.div>
  );
}
