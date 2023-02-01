import Image from "next/image";

export default function Card({
  darkMode,
  image,
  title,
  description,
  github,
  stack,
}) {
  console.log(darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="p-10 max-w-xs md:max-w-sm ">
        <div>
          <Image src={image} alt="" />
        </div>
        <div className="text-gray-900 dark:text-white">
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
