import { BsFillLightbulbFill } from "react-icons/bs";
import Socials from "./Socials/Socials";

export function Navigation({ handleClick }) {
  return (
    <nav className=" p-5  flex justify-between  ">
      {/* <h1 className=" text-xl font-burtons">developed by JC</h1> */}
      <Socials />

      <ul className="flex items-center ">
        <li onClick={handleClick}>
          <BsFillLightbulbFill className="cursor-pointer text-xl dark:text-white" />
        </li>

        {/* <li>
         <a
           href="#"
           className="bg-gradient-to-r  from-cyan-500  to-teal-500 text-white px-4 py-2 rounded-md ml-8"
         >
           resume
         </a>
        </li> */}
      </ul>
    </nav>
  );
}
