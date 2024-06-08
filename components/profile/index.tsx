import styles from "./profile.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Profile() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 20]);
  const marginTop = useTransform(scrollY, [0, 200], [0, 200]);
  const marginBottom = useTransform(scrollY, [0, 200], [0, 200]);
  const opacityInOut = useTransform(
    scrollY,
    [0, 10, 190, 200], // 定义滚动位置的范围
    [1, 0, 0, 1] // 定义相应的透明度值
  );
  const opacity = useTransform(scrollY, [200, 201], [1, 0]);
  const opacity__ = useTransform(scrollY, [0, 200], [1, 0]);
  const opacity_ = useTransform(scrollY, [50, 250], [0, 1]);
  return (
    <div className={styles.container}>
      <motion.img
        className={styles.img}
        src="123.png"
        style={{ scale, opacity, marginTop }}
      />

      <motion.div style={{ opacity: opacityInOut }}>
        <h1 className={styles.name}>marcus.dev</h1>
      </motion.div>
      <motion.div style={{ opacity: opacity_ }}>
        <h1 className={styles.name}>A Frontend Developer @ Taiwan</h1>
      </motion.div>
    </div>
  );
}
