import Card from "../Components/Projects/Card";

import { projects } from "@/Components/Projects/Projects";

export default function Portfolio({ night }) {
  console.log("Portfolio: ", night);

  return (
    <div className={night ? "dark" : ""}>
      <div className="px-4 bg-white  dark:bg-gray-900 md:px-24 ">
        <h1 className="dark:text-gray-600 font-montserrat font-extrabold text-3xl md:text-6xl">
          Repository Portal
        </h1>
        <div className="flex flex-wrap justify-center p-2  bg-white dark:bg-gray-800">
          {projects.map((project, i) => {
            if (project.image === "") {
              return <></>;
            }
            console.log("portfolio: ", night);
            return (
              <div
                key={i}
                className=" border border-gray-900 rounded-xl m-2 md:m-4 "
              >
                <Card
                  image={project.image}
                  github={project.github}
                  title={project.title}
                  description={project.description}
                  repository={project.repository}
                  status={project.status}
                  night={night}
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
// import { useEffect, useState } from "react";

// import Head from "next/head";
// import { Hero } from "../Components/Hero/Hero";

// import Portfolio from "./portfolio";

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(true);

//   // useEffect(() => setDarkMode(true), []);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Head>
//         <title>Cordovez-Mantilla</title>
//         <meta name="description" content="development portfolio" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Portfolio />
//     </div>
//   );
// }
