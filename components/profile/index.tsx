import { useState } from "react";
import styles from "./profile.module.css";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
export default function Profile() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const imgControls = useAnimation();
  const marginTop = useTransform(scrollY, [0, 200], [0, 200]);
  const [animationExecuted, setAnimationExecuted] = useState(false);

  const LIMIT = 200;
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > LIMIT)
      controls.start({
        x: "0",
        opacity: 1,
        transition: { duration: 0.5 },
      });
    if (latest > LIMIT && !animationExecuted) {
      imgControls.start({
        scale: [1, 30, 1],

        transition: { duration: 1.5, times: [0, 0.99, 1] },
      });
      setAnimationExecuted(true);
    }
  });
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className={styles.container} onClick={() => setSelectedId(null)}>
      <motion.img
        animate={imgControls}
        className={styles.img}
        src="123.png"
        style={{ marginTop }}
      />

      <motion.div className={styles.name}>
        <h1 className={styles.name}>marcus.dev</h1>
        <h1 className={styles.name}>A Frontend Developer @ Taiwan</h1>
      </motion.div>

      <motion.div
        animate={controls}
        style={{ opacity: 0, x: "-100%", width: "100%" }}
      >
        <h1 className={styles.name}>Biography</h1>
        <h4 className={styles.self_introduction}>
          "Hi, I'm Marcus Tsai, a frontend engineer now working for Shopee. I
          contribute to the development of web applications though React, TS and
          Css Modules!"
        </h4>
      </motion.div>
    </div>
  );
}
