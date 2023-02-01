import Card from "../Components/Projects/Card";

import { projects } from "@/Components/Projects/Projects";

export default function Portfolio({ darkMode }) {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="px-4 bg-white  dark:bg-gray-900 md:px-24 ">
        <h1 className="dark:text-gray-600 font-montserrat font-extrabold text-3xl md:text-6xl">
          Repository Portal
        </h1>
        <div className="flex flex-wrap justify-center p-2">
          {projects.map((project, i) => {
            if (project.image === "") {
              return <></>;
            }
            return (
              <div
                key={i}
                className=" border border-gray-700 rounded-xl m-2 md:m-4 dark:bg-gray-800"
              >
                <Card
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  repository={project.repository}
                  status={project.status}
                  darkMode={darkMode}
                />
              </div>
            );
            // <p key={project.index}>{project.title}</p>
          })}
        </div>
      </div>
    </div>
  );
}
