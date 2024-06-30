import { useState } from "react";
import styles from "./Project.module.css";
import { jobExperience } from "../../config/text";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import Item from "./Item";
import { useEffect, useRef } from "react";
import { handleVideoWork } from "../../logic/logic";
import { projects } from "../../config/config";

export default function Project({ controls }) {
  const [selected, setSelected] = useState(-1);
  const project = projects[selected - 1];
  const videoRef = useRef(null);

  useEffect(() => {
    if (selected !== -1) {
      handleVideoWork("play", videoRef);
      return;
    }
    handleVideoWork("pause", videoRef);
  }, [selected]);

  useEffect(() => {
    if (selected !== -1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <motion.div
      animate={controls}
      className={styles.container}
      style={{ opacity: 0 }}
    >
      <h1 className={styles.topic}>Project</h1>
      <LayoutGroup>
        <div
          className={styles.row_container}
          style={{
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {projects.map((project, index) => (
            // <Item
            //   key={index}
            //   job={job}
            //   index={index + 1}
            //   selected={selected}
            //   setSelected={setSelected}
            // />
            <Item
              key={index}
              project={project}
              index={index + 1}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <AnimatePresence>
          {selected !== -1 && (
            <>
              <motion.div
                className={styles.backdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(-1)}
              />
              <motion.div
                onScroll={(e) => e.stopPropagation()}
                layoutId={`project-${selected}`}
                key={project.title}
                className={`${styles.row_container} ${styles.project_container} ${styles.open}`}
              >
                <motion.div
                  layoutId={`closeButton-1`}
                  className={styles.close_button}
                  onClick={(e) => {
                    setSelected(-1);
                    e.stopPropagation();
                  }}
                >
                  X
                </motion.div>
                <motion.video
                  layoutId={`video-${selected}`}
                  ref={videoRef}
                  src={project.src}
                  muted
                  loop
                  className={`${styles.project_video} ${styles.open}`}
                  onLoadedData={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                    }
                  }}
                />
                <motion.div
                  layoutId={`project-link-container${selected}`}
                  className={styles.link_container}
                >
                  <motion.div
                    layoutId={`project-git-link${selected}`}
                    className={styles.link_item}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open(project.git_repo);
                    }}
                  >
                    Repo...
                  </motion.div>
                  <motion.div
                    layoutId={`project-vercel-link${selected}`}
                    className={styles.link_item}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open(project.vercel);
                    }}
                  >
                    Vercel...
                  </motion.div>
                </motion.div>
                {/* <motion.div
                  layoutId={`project-content-${selected}`}
                  className={`${styles.project_content} ${styles.open}`}
                >
                  <motion.div
                    layoutId={`project-title-${selected}`}
                    className={`${styles.project_title} ${styles.open}`}
                  >
                    {project.title}
                  </motion.div>
                  <motion.div
                    layoutId={`project-des-${selected}-1`}
                    className={`${styles.project_description} ${styles.open}`}
                  >
                    Using 
                  </motion.div>
                  <motion.div
                    layoutId={`project-des-${selected}-2`}
                    className={`${styles.project_description} ${styles.open}`}
                  >
                    1. Real-Time Messaging: Utilize SeaTalk's real-time
                    messaging capabilities to facilitate quick information
                    exchange within the logistics team.
                  </motion.div>
                  <motion.div
                    layoutId={`project-des-${selected}-3`}
                    className={`${styles.project_description} ${styles.open}`}
                  >
                    2. Task Automation: Implement automated task processing and
                    monitoring using Airflow to reduce human errors and improve
                    operational efficiency.
                  </motion.div>

                  <motion.div
                    layoutId={`project-tech-stacks-${selected}`}
                    className={styles.row_container}
                  >
                    {project.techs.map((tech, desIndex) => (
                      <motion.div
                        layoutId={`project-tech-stack-${selected}-${desIndex}`}
                        key={desIndex}
                        className={styles.project_tech_stack}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div> */}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
