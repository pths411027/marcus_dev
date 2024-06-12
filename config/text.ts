import { color } from "framer-motion";

export const jobExperience = [
  {
    duration: "2023/07 - Present",
    title: "Junior Frontend Engineer, Shopee",
    des: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tech: ["React", "TypeScript", "Css Modules"],
  },
  {
    duration: "2023/01 - 2023/07",
    title: "Backend Engineer Intern, Shopee",
    des: "Worked on the backend of the Shopee platform, focusing on the development of the search and recommendation system. Implemented a new feature that improved the search result relevance by 20%.",
    tech: ["Python", "FastAPI", "MySQL"],
  },
  {
    duration: "2022/06 - 2022/12",
    title: "Data Analyst Intern, Nomura",
    des: "Analyzed and visualized data to provide insights for the trading team. Developed a dashboard that improved the efficiency of data analysis by 30%.",
    tech: ["Python", "Pandas", "PyTorch"],
  },
];

export const techStack = [
  {
    img: "atom.png",
    field: "Frontend Dev",
    languages: [
      { lang: "React", img: "atom.png" },
      { lang: "Css modules", img: "css.png" },
      { lang: "JS", img: "js.png" },
      { lang: "html", img: "atom.png" },
      // "TypeScript",
      // "Css Modules",
      // "html",
      // "styled-components",
    ],
    color: "rgb(97, 218, 251)",
    background: "rgba(97, 218, 251, 0.3)",
  },
  {
    img: "web.png",
    field: "Backend Dev",
    languages: [
      { lang: "Python", img: "css.png" },
      { lang: "FastAPI", img: "atom.png" },
      { lang: "MySql", img: "js.png" },
      { lang: "SQLAlchemy", img: "js.png" },
    ],
    // ["Python", "FastAPI", "MySql", "SQLAlchemy", "Airflow"],
    color: "rgb(55, 118, 171)",
    background: "rgba(55, 118, 171, 0.3)",
  },
  {
    img: "networking.png",
    field: "Infra Dev Ops",
    // languages: ["Git", "Docker", "https"],
    languages: [
      { lang: "Git", img: "atom.png" },
      { lang: "Docker", img: "atom.png" },
      { lang: "https", img: "atom.png" },
    ],
    color: "rgb(255, 160, 122)",
    background: "rgba(255, 160, 122, 0.3)",
  },
];
