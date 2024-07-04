"use client";
import Head from "next/head";
import styles from "./index.module.css";
import Profile from "../components/profile";
import Job from "../components/Job";
import Tech from "../components/Tech";
import Project from "../components/Project";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/Loading";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import useStore from "../store";
import { useEffect, useState } from "react";
import { displayEffect } from "../config/config";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { HEAD } from "../config/config";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollY } = useScroll();
  const biographyControls = useAnimation();
  const techTitleControls = useAnimation();
  const techContentControls = useAnimation();
  const jobControls = useAnimation();
  const projectControls = useAnimation();
  const imgControls = useAnimation();
  const marginTopControls = useTransform(scrollY, [0, 200], [0, 200]);
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const isLoadingNum = useStore((state) => state.isLoadingNum !== 5);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !animationExecuted) {
      window.scrollTo({ top: 0, behavior: "instant" });
      imgControls.start(displayEffect.zoom).then(() => {
        biographyControls
          .start(displayEffect.x)
          .then(() =>
            techTitleControls
              .start(displayEffect.y)
              .then(() => techContentControls.start(displayEffect.y))
          );
      });
      setAnimationExecuted(true);
    }
    if (latest > 300) {
      jobControls
        .start(displayEffect.z)
        .then(() => projectControls.start(displayEffect.z));
    }
  });
  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{HEAD.title}</title>
        <link rel="icon" href={HEAD.favicon} />
        <meta name="description" content={HEAD.description} />
      </Head>
      <main className={styles.container}>
        {/* <Sky /> */}
        {isLoadingNum && !isMobile && <Loader />}
        {!isMobile ? (
          <div className={styles.content}>
            <Analytics />
            <Profile
              imgControls={imgControls}
              marginTopControls={marginTopControls}
            />

            <Tech
              titleControls={techTitleControls}
              contentControls={techContentControls}
            />
            <Job controls={jobControls} />
            <Project controls={projectControls} />
            <Card />
            <Footer />
          </div>
        ) : (
          <div style={{ height: "100vh", color: "white" }}>
            <p
              style={{
                margin: "0 auto",
                lineHeight: "100vh",
                fontFamily: "Segoe UI",
              }}
            >
              This content is only available on desktop devices.
            </p>
          </div>
        )}
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
