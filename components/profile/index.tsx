import styles from "./profile.module.css";
import { jobExperience, techStack } from "../../config/text";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  scroll,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
export default function Profile() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  // const scale = useTransform(scrollY, [0, 200], [1, 30]);
  const marginTop = useTransform(scrollY, [0, 200], [0, 200]);
  const opacityInOut = useTransform(
    scrollY,
    [0, 10, 190, 200], // 定义滚动位置的范围
    [1, 0, 0, 1] // 定义相应的透明度值
  );
  const scale = useTransform(
    scrollY,
    [0, 200, 201], // 定义滚动位置的范围
    [1, 30, 1] // 定义相应的透明度值
  );
  const opacity = useTransform(scrollY, [200, 201], [1, 0]);
  const opacity_ = useTransform(scrollY, [50, 250], [0, 1]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(latest);
    if (latest > 200)
      controls.start({ x: 0, opacity: 1, transition: { duration: 1.5 } });
  });
  return (
    <div className={styles.container}>
      <motion.img
        className={styles.img}
        src="123.png"
        style={{ scale, marginTop }}
      />

      <motion.div style={{ opacity: opacityInOut }}>
        <h1 className={styles.name}>marcus.dev</h1>
      </motion.div>
      <motion.div style={{ opacity: opacity_ }}>
        <h1 className={styles.name}>A Frontend Developer @ Taiwan</h1>
      </motion.div>
      <motion.div animate={controls} style={{ opacity: 0, x: "-100%" }}>
        <h1 className={styles.name}>Biography</h1>
        <h4 className={styles.self_introduction}>
          "Hi, I'm Marcus Tsai, a frontend engineer now working for Shopee. I
          contribute to the development of web applications though React, TS and
          Css Modules!"
        </h4>
      </motion.div>
      <h1 className={styles.tech_stack}>Tech Stack</h1>
      <div
        className={styles.row_container}
        style={{ width: "100%", gap: "12px" }}
      >
        {techStack.map((tech) => (
          <div
            className={styles.column_container}
            style={{
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              padding: "20px",
            }}
          >
            <div
              className={styles.row_container}
              style={{ alignItems: "center", gap: "20px" }}
            >
              <img className={styles.fields_Img} src={tech.img} />
              <div
                className={styles.column_container}
                style={{ width: "auto", padding: "10px" }}
              >
                <div className={styles.field} style={{ marginInline: "10px" }}>
                  {tech.field}
                </div>
                <div className={styles.field_baseline} />
              </div>
            </div>
            <div
              className={styles.row_container}
              style={{
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              {tech.languages.map((lang) => (
                <div
                  className={styles.row_container}
                  style={{
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: tech.background,
                    padding: "5px 15px",
                    borderRadius: "10px",
                    width: "auto",
                    flexWrap: "nowrap",
                  }}
                >
                  <img
                    className={styles.fields_Img}
                    src={lang.img}
                    style={{
                      width: "24px",
                      // backgroundColor: tech.color,
                      boxShadow: `0 0 20px 2px ${tech.color}`,
                    }}
                  />
                  <div
                    style={{
                      color: tech.color,
                      fontSize: "14px",
                      lineHeight: "30px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {lang.lang}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles.tech_stack}>Experience</h1>
      {jobExperience.map((job) => (
        <div
          className={styles.row_container}
          style={{ alignItems: "baseline" }}
        >
          <div className={styles.job_duration}>{job.duration}</div>
          <div className={styles.column_container}>
            <div className={styles.job_title}>{job.title}</div>
            <div className={styles.job_des}>{job.des}</div>
            <div className={`${styles.row_container} ${styles.job_skills}`}>
              {job.tech.map((skill) => (
                <div className={styles.job_skill}>{skill}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
