import { color } from "framer-motion";
import { text } from "stream/consumers";

export const jobExperience = [
  {
    duration: "2023/07 - Present",
    title: "Junior Frontend Engineer, Shopee",
    descriptions: [
      "Built and maintained Web applications for Shopee’s internal tools, including ...",
      "Worked closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    ],
    tech: ["React", "TypeScript", "Css Modules"],
  },
  {
    duration: "2023/01 - 2023/07",
    title: "Backend Engineer Intern, Shopee",
    descriptions: [
      "Built RESTful APIs for internal tools for Shopee’s internal tools through FastAPI, sqlalchemy, and MySQL",
      "Implemented and maintained ETL pipelines for data processing and analysis, using Apache Airflow and MySQL.",
      "Created Chatbot for convenience store logistics alert system",
    ],
    tech: ["Python", "FastAPI", "MySQL"],
  },
  {
    duration: "2022/06 - 2022/12",
    title: "Data Analyst Intern, Nomura",
    descriptions: [
      "Built data pipelines for data processing and analysis, using Python, Pandas, and PyTorch",
      "Analyzed and visualized data to provide insights for the trading team, including ...",
    ],
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
      { lang: "JavaScript", img: "js.png" },
      { lang: "html", img: "atom.png" },
      { lang: "ES-6", img: "atom.png" },
      // "TypeScript",
      // "Css Modules",
      // "html",
      // "styled-components",
    ],
    // color: "rgb(246, 64, 54)",
    color: "rgb(250, 170, 51)",
    background: "rgba(250, 170, 51, 0.3)",
  },
  {
    img: "web.png",
    field: "Backend Dev",
    languages: [
      { lang: "Python", img: "css.png" },
      { lang: "FastAPI", img: "atom.png" },
      { lang: "MySql", img: "js.png" },
      { lang: "Airflow", img: "js.png" },
      { lang: "SQLAlchemy", img: "atom.png" },
      { lang: "PostgreSQL", img: "atom.png" },
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
      { lang: "Gitlab", img: "atom.png" },
      { lang: "Docker", img: "atom.png" },
      { lang: "vercel", img: "atom.png" },
      { lang: "CICD", img: "atom.png" },
      { lang: "GCP", img: "atom.png" },
    ],
    color: "rgb(255, 160, 122)",
    background: "rgba(255, 160, 122, 0.3)",
  },
];

export const terminalText = [
  {
    type: "text",
    text: "Hey, I'm Marcus, Nice to meet you~",
    color: "white",
  },
  {
    type: "delete",
    text: [
      "I used to be a Data analyst",
      "After that, I became a Backend Dev, doing Python, FastAPI, MySql",
      "After that, Now, I'm a Frontend Dev, doing React, TypeScript, Css Modules",
    ],
    color: "#c815c8",
  },
  {
    type: "text",
    text: "----------------------------------------------",
    color: "white",
  },
  {
    type: "texts",
    subText: [
      {
        type: "text",
        text: "cd",
        color: "#2eb41d",
      },
      {
        type: "text",
        text: "your_mac",
        color: "#ffffff",
      },
    ],
  },
  {
    type: "text",
    text: "~/your_mac",
    color: "#2eb41d",
  },
  {
    type: "texts",
    subText: [
      {
        type: "text",
        text: "% npm",
        color: "#2eb41d",
      },
      {
        type: "text",
        text: "install",
        color: "#ffffff",
      },
      {
        type: "text",
        text: "marcus.tsai.dev website pkg --save",
        color: "#ffffff",
      },
    ],
  },
  {
    type: "text",
    text: "added 22 packages in 3s",
    color: "#ffffff",
  },
  {
    type: "text",
    text: "4 packages are looking for funding",
    color: "#ffffff",
  },
  {
    type: "text",
    text: "run `npm fund` for details",
    color: "#ffffff",
  },
  {
    type: "texts",
    subText: [
      {
        type: "text",
        text: "~/your_mac",
        color: "#31afbb",
      },
      {
        type: "text",
        text: "took",
        color: "#ffffff",
      },
      {
        type: "text",
        text: "10s",
        color: "#9ea01d",
      },
    ],
  },
];
