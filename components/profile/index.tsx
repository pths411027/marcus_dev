import { useState } from "react";
import styles from "./profile.module.css";
import { motion } from "framer-motion";
export default function Profile({
  imgControls,
  contentControls,
  marginTopControls,
}) {
  return (
    <div className={styles.container}>
      <motion.img
        animate={imgControls}
        className={styles.img}
        src="123.png"
        style={{ marginTop: marginTopControls }}
      />

      <motion.div className={styles.name}>
        <h1 className={styles.name}>marcus.dev</h1>
        <h1 className={styles.name}>A Frontend Developer @ Taiwan</h1>
      </motion.div>

      <motion.div
        animate={contentControls}
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
