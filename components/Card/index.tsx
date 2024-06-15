import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useDragControls,
} from "framer-motion";
import styles from "./Card.module.css";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function Card() {
  const parentRef = useRef(null);
  const inputRef = useRef(null);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const [isClick, setIsClick] = useState(false);
  const handleMouseMove = (e) => {
    if (!ref.current || isClick) return;
    inputRef.current.focus();
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current || isClick) return;
    x.set(0);
    y.set(0);
  };

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  return (
    <motion.div
      ref={parentRef}
      className={`${styles.container} ${styles.column_container}`}
      style={{
        position: "relative",
        backgroundImage: "url('./10.png')",
        backgroundSize: "cover",
        alignItems: "center",
      }}
    >
      <motion.div
        className={styles.column_container}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => inputRef.current.focus()}
        style={{
          transformStyle: "preserve-3d",
          transform: isClick ? "" : transform,
          width: "80%",
          minHeight: "400px",
          height: "400px",
          borderRadius: "1rem",
          // zIndex: "1 !important",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
            position: "absolute",
            inset: "1px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(5px)",
            borderRadius: "1rem",
            gap: "0px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            className={styles.row_container}
            style={{
              position: "relative",
              justifyContent: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              backgroundColor: "#0d1220",
              color: "white",
              padding: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            marcus.tsai.dev.hi ~
            <div
              className={styles.row_container}
              style={{
                position: "absolute",
                left: "10px",
                top: "10px",
                gap: "5px",
              }}
            >
              <div
                className={styles.mac_button}
                style={{ backgroundColor: "red" }}
              />
              <div
                className={styles.mac_button}
                style={{ backgroundColor: "yellow" }}
              />
              <div
                className={styles.mac_button}
                style={{ backgroundColor: "green" }}
              />
            </div>
          </div>
          <div
            className={styles.column_container}
            style={{
              justifyContent: "center",
              padding: "10px",
              gap: "5px",
              color: "white",
              fontSize: "20px",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            <div>Hey, I'm Marcus, Nice to meet you~</div>
            <div>
              ------------------------------------------------------------------------
            </div>
            <div>~</div>
            <div>npm install you email!!!</div>
            <input
              className={styles.Input}
              ref={inputRef}
              placeholder="npm install your-email"
              style={{
                background: "none",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "20px",
                fontFamily: "monospace",
              }}
            ></input>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
