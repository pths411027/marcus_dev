import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import styles from "./Card.module.css";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function Card() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

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
  const deBounce = (fn, delay) => {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={deBounce(handleMouseLeave, 300)}
      style={{
        position: "relative",

        transformStyle: "preserve-3d",
        transform,
        width: "300px",
        height: "400px",
        backgroundColor: "white",
        borderRadius: "1rem",
        zIndex: "1 !important",
      }}
    >
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
          position: "absolute",
          inset: "10px",
          display: "grid",
          placeContent: "center",
          borderRadius: "1rem",
          backgroundColor: "black",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <p
          style={{
            transform: "translateZ(50px)",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
}
