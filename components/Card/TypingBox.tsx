import { TypeAnimation } from "react-type-animation";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Card.module.css";
import { terminalText } from "../../config/text";

export default function TypingBox() {
  const inputRef = useRef(null);
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  useEffect(() => {
    if (step === terminalText.length) {
      inputRef.current.focus();
    }
  }, [step]);
  return (
    <>
      {terminalText.map((text, index) => {
        if (text.type === "text" || text.type === "delete") {
          return (
            step >= index && (
              <TypeAnimation
                key={
                  Array.isArray(text.text)
                    ? `${text.text[0]}_${index} + `
                    : `${text.text}_${index} + `
                }
                sequence={
                  text.type === "text"
                    ? [
                        text.text as string,
                        (el) => {
                          el.classList.remove(
                            styles.custom_type_animation_cursor
                          );
                          setStep(index + 1);
                        },
                      ]
                    : [
                        text.text[0],
                        300,
                        text.text[1],
                        text.text[2],
                        (el) => {
                          el.classList.remove(
                            styles.custom_type_animation_cursor
                          );
                          setStep(index + 1);
                        },
                        ,
                      ]
                }
                className={`${styles.custom_type_animation_cursor} ${styles.terminal}`}
                cursor={false}
                speed={85}
                deletionSpeed={75}
                style={{
                  color: text.color,
                }}
              />
            )
          );
        } else {
          return (
            step >= index && (
              <div
                key={text.subText[0].text}
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                {text.subText.map((subText, subIndex) => {
                  return (
                    (subStep >= subIndex || step >= index + 1) && (
                      <TypeAnimation
                        key={`${subText.text}_${index}_${subIndex}`}
                        speed={85}
                        sequence={[
                          subText.text,
                          (el) => {
                            el.classList.remove(
                              styles.custom_type_animation_cursor
                            );
                            setSubStep(subIndex + 1);
                            if (subIndex === text.subText.length - 1) {
                              setStep(index + 1);
                              setSubStep(0);
                            }
                          },
                        ]}
                        wrapper="span"
                        className={`${styles.custom_type_animation_cursor} ${styles.terminal}`}
                        cursor={false}
                        style={{
                          color: subText.color,
                        }}
                      />
                    )
                  );
                })}
              </div>
            )
          );
        }
      })}
      {step === terminalText.length && (
        <motion.div
          animate={{ opacity: 1 }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: "inline", color: "#2eb41d" }}>~</div>
          <input
            className={styles.Input}
            ref={inputRef}
            placeholder="input your email"
            spellCheck="false"
            style={{
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          ></input>
        </motion.div>
      )}
    </>
  );
}
