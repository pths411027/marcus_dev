import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useDragControls,
} from "framer-motion";
import Typewriter from "react-typewriter-effect";
import styles from "./Card.module.css";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function Card() {
  const texts = [
    "Hey, I'm Marcus, Nice to meet you~",
    "------------------------------------------------------------------------",
    "cd your_mac",
    "~/your_mac",
    "% npm install marcus.dev.website",
    "added 22 packages in 3s",
    "4 packages are looking for funding",
    "run `npm fund` for details",
    "~/your_mac took 3s",
  ];
  const parentRef = useRef(null);
  const inputRef = useRef(null);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
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
    if (!ref.current) return;
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
          transform,
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
                style={{ backgroundColor: "#fb4947" }}
              />
              <div
                className={styles.mac_button}
                style={{ backgroundColor: "#fdb324" }}
              />
              <div
                className={styles.mac_button}
                style={{ backgroundColor: "#29c232" }}
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
            <div className={styles.row_container} style={{ gap: "10px" }}>
              <div style={{ color: "#2eb41d" }}>cd</div>
              <div style={{ color: "white" }}>your_mac</div>
            </div>
            <div style={{ display: "inline-", color: "#2eb41d" }}>
              ~/your_mac
            </div>
            <div className={styles.row_container} style={{ gap: "10px" }}>
              <div style={{ color: "#2eb41d" }}>% npm</div>
              <div style={{ color: "white" }}>install marcus.dev.website</div>
            </div>
            <div style={{ marginTop: "12px" }}>added 22 packages in 3s</div>
            <div>4 packages are looking for funding</div>
            <div style={{ marginBottom: "12px" }}>
              run `npm fund` for details
            </div>
            <div className={styles.row_container} style={{ gap: "10px" }}>
              <div style={{ color: "#31afbb" }}>~/your_mac</div>
              <div style={{ color: "white" }}>took 3s</div>
              <div style={{ color: "#9ea01d" }}>took 3s</div>
            </div>
            <div className={styles.row_container} style={{ gap: "10px" }}>
              <div style={{ display: "inline-", color: "#2eb41d" }}>~</div>
              <input
                className={styles.Input}
                ref={inputRef}
                placeholder="npm install your-email"
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: "20px",
                  fontFamily: "monospace",
                }}
              ></input>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
