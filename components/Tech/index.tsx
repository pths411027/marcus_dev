import { useState } from "react";
import styles from "./Tech.module.css";
import { techStack } from "../../config/text";
import { motion, LayoutGroup } from "framer-motion";
import TechItem from "./TechItem";
export default function Tech({ titleControls, contentControls }) {
  const [selected, setSelected] = useState(-1);
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.topic}
        animate={titleControls}
        style={{ y: "-100%", opacity: 0 }}
      >
        <h1 className={styles.topic}>Tech Stack</h1>
      </motion.div>
      <motion.div
        layout
        className={`${styles.row_container} ${styles.tech_stack_container}`}
        style={{
          width: "100%",
          gap: "10px",
          flexWrap: "wrap",
          y: "-100%",
          opacity: 0,
          alignItems: "stretch",
        }}
        animate={contentControls}
      >
        <LayoutGroup>
          {techStack.map((tech, index) => (
            <TechItem
              key={index}
              index={index}
              tech={tech}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </LayoutGroup>
      </motion.div>
    </div>
  );
}
