import { BsFillLightbulbFill } from "react-icons/bs";
import Socials from "./Socials/Socials";
import NavButtons from "../Common/NavButtons/NavButtons";

export function Navigation({ night, setNight }) {
  return (
    <div className={night ? "dark" : ""}>
      <div className=" flex justify-start items-center bg-white flex-wrap min-w-max  p-5  md:flex md:justify-between md:px-20 dark:bg-gray-900">
        <div className=" ">
          <Socials />
        </div>

        <div className="invisible md:visible">
          <NavButtons />
        </div>

        <div className="flex items-center  ">
          <a
            onClick={() => {
              setNight(!night);
            }}
          >
            <BsFillLightbulbFill className="cursor-pointer text-xl dark:text-white dark:hover:text-yellow-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
