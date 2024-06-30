export const HEAD = {
  title: "Marcus.Dev",
  description: "Frontend Developer Marcus Tsai's personal blog",
  favicon: "/favicon.png",
};
export const IMG = "img.png";
const DURATION = 0.3;
const DELAY = 0.1;
interface DisplayEffect {
  x: {
    x: string;
    opacity: number;
    transition: { duration: number; delay?: number };
  };
  y: {
    y: string;
    opacity: number;
    transition: { duration: number; delay?: number };
  };
  z: {
    opacity: number;
    transition: { duration: number; delay?: number };
  };
  zoom: {
    scale: Array<number>;
    transition: { duration: number; times: Array<number> };
  };
}
export const displayEffect: DisplayEffect = {
  x: {
    x: "0",
    opacity: 1,
    transition: { duration: DURATION },
  },
  y: {
    y: "0",
    opacity: 1,
    transition: { duration: DURATION },
  },
  z: {
    opacity: 1,
    transition: { duration: DURATION, delay: DELAY },
  },
  zoom: {
    scale: [1, 30, 1],
    transition: { duration: DURATION, times: [0, 0.99, 1] },
  },
};

export const projects = [
  {
    title: "Switch Card",
    des: "built a switch card with framer-motion (animation)",
    src: "./video/switch_card.mov",
    git_repo: "https://github.com/pths411027/switch-card.git",
    vercel: "https://switch-card-gamma.vercel.app/",
    techs: ["react", "next.js", "framer-motion"],
  },
  {
    title: "Scenery Card",
    des: "built a scenery with css (hover, transform)",
    src: "./video/scenery_card.mov",
    git_repo: "https://github.com/pths411027/scenery-card.git/",
    vercel: "https://scenery-six.vercel.app/",
    techs: ["react", "next.js", "framer-motion"],
  },
  {
    title: "Framework Card",
    des: "built a framework card with css (hover, scale, transform)",
    src: "./video/framework_card.mov",
    git_repo: "https://github.com/pths411027/frameworks-card.git",
    vercel: "https://project-card-pi.vercel.app/",
    techs: ["react", "next.js", "framer-motion"],
  },
  {
    title: "App Dock",
    des: "built a app dock with js logic",
    src: "./video/app_dock.mov",
    git_repo: "https://github.com/pths411027/app-dock.git",
    vercel: "https://app-docker.vercel.app/",
    techs: ["react", "next.js", "framer-motion"],
  },
  {
    title: "App Bar",
    des: "built a app bar with css pseudo elements",
    src: "./video/app_bar.mov",
    git_repo: "https://github.com/pths411027/app-bar.git",
    vercel: "https://app-bar.vercel.app/",
    techs: ["react", "next.js", "framer-motion"],
  },
];
