import { Navigation } from "./../Navigation/Navigation";

import Image from "next/image";
import headshot from "../../public/headshot_sq.jpeg";
import Tooltip from "../Common/Tooltip/Tooltip";

export const Hero = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const quote =
    '"Across many types of tasks and many brain areas, these lateralized patterns tend to switch to bilateral patterns in healthy older adults." —  Kara D. Federmeier ';

  return (
    <>
      <div className=" min-h-[50%]  text-gray-900  px-5 md:px-10 lg:px-40 md:pb-20 dark:bg-gray-900 dark:text-white">
        <Navigation handleClick={handleClick} />

        <div className="flex flex-col items-center pt-10 md:flex-row ">
          <div className="flex-none  mx-auto rounded-full w-40 h-40  overflow-hidden md:h-80 md:w-80 md:mr-10">
            <Image
              src={headshot}
              alt="JC CorMan headshot "
              style="object-fit: cover "
            />
          </div>
          <div className=" text-left p-5 ">
            <h1 className=" font-aboreto text-4xl  text-gray-900 font-medium md:text-6xl dark:text-white">
              Changing Minds
            </h1>
            <p className=" text-lg font-montserrat  font-light text-gray-900 md:text-xl max-w-xl mx-auto dark:text-white">
              What does it mean to be creative if not changing minds? It means
              to skip along the neurons of your brain and merrily find yourself
              lost in a forest of ideas.{" "}
              <span>
                {/* <Tooltip content={quote}>
                  <a
                    href="https://www.simplypsychology.org/left-brain-vs-right-brain.html"
                    className=" underline underline-offset-8 hover:underline-offset-4"
                  >
                    To limit the domain of creativity to one hemisphere of the
                    brain is miss out on 50 percent of the fun.
                  </a>
                </Tooltip> */}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

{
}
