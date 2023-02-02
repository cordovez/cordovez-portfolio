import Link from "next/link";

export default function NavButtons() {
  return (
    <nav>
      <ul className="flex justify-center gap-2  text-gray-900 dark:text-white  md:gap-8">
        {[
          ["About Me", "/about"],
          ["Portfolio", "/"],
        ].map(([title, url]) => (
          <li key={url}>
            <Link href={url}>
              <button className=" text-sm p-2 rounded-md hover:bg-gray-300 dark:bg-cyan-900 dark:hover:bg-cyan-700">
                {title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
