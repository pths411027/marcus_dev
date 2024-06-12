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
  const imgControls = useAnimation();
  const marginTop = useTransform(scrollY, [0, 200], [0, 200]);
  const opacityInOut = useTransform(
    scrollY,
    [0, 10, 200, 201], // 定义滚动位置的范围
    [1, 0, 0, 1] // 定义相应的透明度值
  );
  const scale = useTransform(scrollY, [0, 200, 201], [1, 30, 1]);
  const opacity = useTransform(scrollY, [200, 201], [1, 0]);
  const opacity_ = useTransform(scrollY, [50, 250], [0, 1]);
  let animationExecuted = false;
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(scrollY.getPrevious() - latest);
    if (latest > 200)
      // controls.start({ x: 0, opacity: 1, transition: { duration: 1.5 } });
      controls.start({
        x: "0",
        opacity: 1,
        transition: { duration: 1.5 },
        // transform: "translateX(-50%)",
      });
    if (latest > 100 && !animationExecuted) {
      imgControls.start({
        scale: [1, 30, 1],
        transition: { times: [0, 0.99, 1] },
      });
      animationExecuted = true;
    }
    // if (latest > 200) {
    //   controls.start({ x: 0, opacity: 1, transition: { duration: 1.5 } });
    // }
  });
  const scale_ = scrollY.get() > 0 ? scale : 1;
  return (
    <div className={styles.container}>
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

      <h1 className={styles.topic}>Tech Stack</h1>
      <div
        className={`${styles.row_container} ${styles.tech_stack_container}`}
        style={{ width: "100%", gap: "10px", flexWrap: "wrap" }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.field}
            className={styles.column_container}
            style={{
              flex: "1",
              minWidth: "350px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              padding: "20px",
            }}
          >
            <div
              className={styles.row_container}
              style={{ alignItems: "center" }}
            >
              <img className={styles.fields_Img} src={tech.img} />
              <div
                className={styles.column_container}
                style={{ width: "auto", padding: "10px" }}
              >
                <div className={styles.field}>{tech.field}</div>
                <div
                  className={styles.field_baseline}
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </div>
            <div
              className={styles.row_container}
              style={{
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              {tech.languages.map((lang) => (
                <div
                  key={lang.lang}
                  // className={styles.row_container}
                  className={`${styles.row_container} ${styles.lang_box}`}
                  style={{
                    backgroundColor: tech.background,
                    boxShadow: `0 0 20px 2px ${tech.color}`,
                  }}
                >
                  <img
                    className={styles.fields_Img}
                    src={lang.img}
                    style={{
                      width: "24px",
                      backgroundColor: tech.background,
                      boxShadow: `0 0 20px 2px ${tech.color}`,
                    }}
                  />
                  <div
                    className={styles.tech_item}
                    style={{
                      color: tech.color,
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

      <h1 className={styles.topic}>Experience</h1>
      {jobExperience.map((job) => (
        <div
          key={job.title}
          className={`${styles.row_container} ${styles.job_container}`}
          style={{ alignItems: "baseline" }}
        >
          <div className={styles.job_duration}>{job.duration}</div>
          <div className={styles.column_container}>
            <div className={styles.job_title}>{job.title}</div>
            <div className={styles.job_des}>{job.des}</div>
            <div className={`${styles.row_container} ${styles.job_skills}`}>
              {job.tech.map((skill) => (
                <div key={skill} className={styles.job_skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
