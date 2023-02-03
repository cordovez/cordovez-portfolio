import { Ribbon } from "./ribbon";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export default function Card({
  night,
  image,
  title,
  description,
  github,
  stack,
  status,
}) {
  console.log(night);
  return (
    <div>
      <div>{status === "development" ? <Ribbon /> : <></>}</div>
      <div className={night ? "dark" : ""}>
        <div className="bg-gray-100 border rounded-lg p-2  flex flex-col max-w-xs text-slate-700 dark:text-white dark:bg-gray-800  md:p-6">
          <div>
            <Image src={image} alt={title} />
          </div>
          <div className=" font-montserrat mt-2 px-2">
            <p className="font-bold">{title} </p>
            <p>{description} </p>
            <div className="flex justify-end mt-2">
              <div className="flex items-center cursor-pointer gap-6 w-40 rounded-lg bg-gradient-to-r">
                <p>go to repo ... </p>
                <a href={github} target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          {/* <div>
            <Image src={stack} alt={title} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
