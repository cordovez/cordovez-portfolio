import Image from "next/image";
import headshot from "../../../public/headshot_sq.jpeg";
import Link from "next/link";
import NavButtons from "@/Components/Common/NavButtons/NavButtons";
import Tooltip from "@/Components/Common/Tooltip/Tooltip";

export default function Introduction({ night }) {
  const quote =
    "Across many types of tasks and many brain areas, these lateralized patterns tend to switch to bilateral patterns in healthy older adults.";
  return (
    <div className={night ? "dark" : ""}>
      <div className="flex flex-col items-center p-5 bg-white dark:text-white dark:bg-gray-900 md:flex-row md:justify-center ">
        <div className=" rounded-full h-44 w-44 ring-white ring-1  overflow-hidden   md:w-80 md:h-80 md:flex-none ">
          <Image
            src={headshot}
            alt="JC CorMan headshot "
            style="object-fit: cover "
          />
        </div>
        <div className=" text-left px-5 mt-10">
          <h1 className=" font-aboreto text-4xl  text-gray-500 font-medium md:text-6xl dark:text-white">
            Changing Minds
          </h1>
          <p className=" text-lg font-montserrat  font-light text-gray-900 md:text-xl max-w-xl mx-auto dark:text-white">
            What does it mean to be creative if not changing minds? It means to
            skip along the neurons of your brain and merrily find yourself lost
            in a forest of ideas.To limit the domain of creativity to one
            hemisphere of the brain is miss out on 50 percent of the fun.
          </p>
        </div>
      </div>
    </div>
  );
}
