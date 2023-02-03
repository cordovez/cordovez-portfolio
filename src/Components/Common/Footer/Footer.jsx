import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <div className="flex justify-between   p-2 bg-cyan-900 font-montserrat text-white px-24">
      <div className="flex items-center ">
        <b className="mr-4">stack: </b>
        <div className="flex gap-8">
          <FaReact />
          <TbBrandNextjs />
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
}
