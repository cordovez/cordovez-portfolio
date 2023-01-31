import Card from "../Components/Projects/Card";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

const projects = [
  {
    image: web1,
    title: "This Site",
    description: "a developer's portfolio",
    github: "",
    stack: "",
  },
  {
    image: web2,
    title: "Gill Reilly",
    description: "a developer's portfolio",
    github: "",
    stack: "",
  },
  {
    image: web3,
    title: "The Guardian Scrape",
    description: "a developer's portfolio",
    github: "",
    stack: "",
  },
  {
    image: web4,
    title: "Data Analysis Dashboard",
    description: "a developer's portfolio",
    github: "",
    stack: "",
  },
];

export default function Portfolio({ darkMode }) {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white  dark:bg-gray-900 ">
        <h1 className="dark:text-gray-800 font-montserrat font-extrabold text-6xl">
          Repository Portal
        </h1>
        <div className="flex flex-wrap">
          {projects.map((project, i) => (
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              repository={project.repository}
              key={i}
              darkMode={darkMode}
            />
            // <p key={project.index}>{project.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
