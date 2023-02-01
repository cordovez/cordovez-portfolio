import Image from "next/image";

export default function Card({
  darkMode,
  image,
  title,
  description,
  github,
  stack,
  status,
}) {
  console.log(darkMode);
  return (
    <div>
      <div>
        {status === "development" ? (
          <div class="corner-ribbon">
            {/* <!-- The container --> */}
            <div class="corner-ribbon__inner">
              {/* <!-- The ribbon --> */}
              <div class="corner-ribbon__ribbon">
                <span>in development</span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
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
    </div>
  );
}
