import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { IoConstructSharp } from "react-icons/io5";

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
      <div>
        {status === "development" ? (
          <div className="corner-ribbon ">
            {/* <!-- The container --> */}
            <div className="corner-ribbon__inner  ">
              {/* <!-- The ribbon --> */}
              <div className=" corner-ribbon__ribbon flex items-center justify-center">
                <span className=" text-2xl text-slate-700 ">
                  <IoConstructSharp />
                </span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={night ? "dark" : ""}>
        <div className="p-2 max-w-xs  bg-rose-500 text-black dark:text-white dark:bg-gray-800 md:max-w-sm md:p-6">
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
