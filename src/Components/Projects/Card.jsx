import Image from "next/image";

export default function Card({
  darkMode,
  image,
  title,
  description,
  github,
  stack,
}) {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="p-20 ">
        <div className=" mw-80 ">
          <Image src={image} alt="" />
        </div>
        <div className="text-black dark:text-white">
          <p>title: {title} </p>
          <p>description: {description} </p>
          <p>repository: {github} </p>
        </div>
        <div>
          <Image src={stack} alt="" />
        </div>
      </div>
    </div>
  );
}
