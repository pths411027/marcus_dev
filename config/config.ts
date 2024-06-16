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
