import { Navigation } from "./../Navigation/Navigation";

import Introduction from "./Intro/Introduction";

export const Hero = ({ night, setNight }) => {
  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  const quote =
    '"Across many types of tasks and many brain areas, these lateralized patterns tend to switch to bilateral patterns in healthy older adults." —  Kara D. Federmeier ';

  return (
    <div className="">
      <Navigation night={night} setNight={setNight} />
      <Introduction night={night} />
    </div>
  );
};

// className=" flex min-h-[50%]  text-gray-900  px-5 md:px-10 lg:px-40 md:pb-20 dark:bg-gray-900 dark:text-white"

/* <Navigation handleClick={handleClick} darkMode={darkMode} /> */
/* <Introduction darkMode={darkMode} setDarkMode={setDarkMode} /> */
