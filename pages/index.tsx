import Head from "next/head";
import styles from "../styles/Home.module.css";
import Profile from "../components/profile";
import Job from "../components/Job";
import Tech from "../components/Tech";
import Project from "../components/Project";
import { useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollY } = useScroll();
  const controls = useAnimation();
  const controls_ = useAnimation();
  const controls__ = useAnimation();
  const controls___ = useAnimation();
  const controls____ = useAnimation();
  const imgControls = useAnimation();
  const marginTop = useTransform(scrollY, [0, 200], [0, 200]);
  const [animationExecuted, setAnimationExecuted] = useState(false);

  const LIMIT = 200;
  const Duration = 0.3;
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !animationExecuted) {
      window.scrollTo({ top: 0, behavior: "instant" });
      imgControls
        .start({
          scale: [1, 30, 1],
          transition: { duration: Duration, times: [0, 0.99, 1] },
        })
        .then(() => {
          controls
            .start({
              x: "0",
              opacity: 1,
              transition: { duration: Duration },
            })
            .then(() => {
              controls_
                .start({
                  y: "0",
                  opacity: 1,
                  transition: { duration: Duration },
                })
                .then(() => {
                  controls__.start({
                    y: "0",
                    opacity: 1,
                    transition: { duration: Duration },
                  });
                });
            });
        });
      setAnimationExecuted(true);
    }
    if (latest > 300) {
      controls___
        .start({
          opacity: 1,
          transition: { duration: Duration, delay: 0.1 },
        })
        .then(() => {
          controls____.start({
            opacity: 1,
            transition: { duration: Duration },
          });
        });
    }
  });
  if (!isClient) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus.Dev</title>
        <link rel="icon" href="123.png" />
      </Head>

      <main>
        <Analytics />
        <Profile
          imgControls={imgControls}
          controls={controls}
          marginTop={marginTop}
        />
        <Tech controls_={controls_} controls__={controls__} />
        <Job controls___={controls___} />
        <Project controls____={controls____} />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: black;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

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
    // <div>123</div>
  );
}
