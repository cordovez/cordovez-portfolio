import flink from "../../public/img/flink.png";
import plantUrbanus from "../../public/img/plant-urbanus.png";
import cordovez from "../../public/img/cordovez.png";
import wordCount from "../../public/img/word-count.png";

// Stack Icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiGraphql,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiDjango,
  SiJavascript,
  SiFlask,
  SiPandas,
  SiApollographql,
} from "react-icons/si";

const projects = [
  {
    image: wordCount,
    title: "Data Scraping with Python and Jupyter Notebooks",
    description: "Basic web scraping as a scaffold to text analysis using NLP",
    github: "https://github.com/cordovez/guardian_opinions_word-count",
    stack: [SiJavascript, FaReact, TbBrandNextjs],
    status: "complete",
  },
  {
    image: cordovez,
    title: "This Site",
    description: "a static site using Next.js, hosted on Git Pages",
    github: "https://github.com/cordovez/cordovez-portfolio",
    stack: [SiJavascript, FaReact, TbBrandNextjs],
    status: "complete",
  },
  {
    image: flink,
    title: "Flink",
    description: "A replica of e-commerce groceries-delivery site",
    github: "https://github.com/cordovez/flink_v2_back",
    stack: [SiJavascript, FaReact, FaNodeJs, SiMongodb],
    status: "complete",
  },
  {
    image: plantUrbanus,
    title: "Plant Urbanus",
    description: "A web app to manage house plants collections",
    github: "https://github.com/cordovez/PlantUrbanus_server",
    stack: [
      SiJavascript,
      FaReact,
      FaNodeJs,
      SiMongodb,
      SiGraphql,
      SiApollographql,
    ],
    status: "development",
  },
  {
    image: "",
    title: "GR",
    description: "Personal Website for executive",
    github: "",
    stack: "",
    status: "development",
  },
];

module.exports = { projects };
