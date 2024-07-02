"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useAnimation,
} from "framer-motion";
import styles from "./Card.module.css";
import TypingBox from "./TypingBox";

export default function Card() {
  const [startTyping, setStartTyping] = useState(false);

  const parentRef = useRef(null);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const wordingControls = useAnimation();
  const controls = useAnimation();
  const [isFirst, setIsFirst] = useState(true);
  const [isTouchBound, setIsTouchBound] = useState(false);
  return (
    <motion.div
      ref={parentRef}
      className={`${styles.container} ${styles.column_container}`}
      onHoverStart={() => {
        if (isFirst) {
          wordingControls
            .start({ opacity: 1, transition: { duration: 0.5 } })
            .then(() =>
              wordingControls
                .start({
                  x: [0, 10, -10, 10, -10, 10, -10, 10, -10, 0],
                  transition: { duration: 1 },
                })
                .then(() =>
                  controls.start({
                    rotate: [5, -5, 5, -5, 0],
                    transition: { duration: 0.8 },
                  })
                )
            );
          setIsFirst(false);
        }
      }}
      onDoubleClick={() => {
        controls
          .start({ rotate: 5, transition: { duration: 0.1 } })
          .then(() =>
            controls
              .start({ rotate: -5, transition: { duration: 0.1 } })
              .then(() => controls.start({ rotate: 0 }))
          );
      }}
      style={{
        border: isTouchBound && "2px solid white",
        position: "relative",
        height: "700px",
        backgroundSize: "cover",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={wordingControls}
        className={styles.hint_wording}
        style={{ opacity: 0 }}
      >
        Click it, move it
      </motion.div>
      <motion.div
        animate={controls}
        className={styles.column_container}
        ref={ref}
        onClick={() => setStartTyping(true)}
        style={{
          position: "absolute",
          top: "150px",
          width: "80%",
          minHeight: "400px",
          height: "400px",
          borderRadius: "1rem",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          cursor: "grab",
        }}
        drag
        dragConstraints={parentRef}
        onDrag={(_, info) => {
          const rect = parentRef.current.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const { left, top, right, bottom } =
            ref.current.getBoundingClientRect();
          if (
            left < 0 ||
            right > windowWidth ||
            top < rect.top ||
            bottom > rect.bottom
          ) {
            setIsTouchBound(true);
          } else {
            setIsTouchBound(false);
          }
        }}
        onDragEnd={() => {
          setIsTouchBound(false);
        }}
        dragMomentum={false}
        dragElastic={0.1}
      >
        <div
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
            position: "absolute",
            inset: "1px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(24, 71, 24, 0.4)",
            backdropFilter: "blur(2px)",
            borderRadius: "1rem",
            gap: "0px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <motion.div
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
          </motion.div>
          <motion.div
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
            {startTyping && <TypingBox />}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
