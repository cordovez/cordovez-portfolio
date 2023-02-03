import { IoConstructSharp } from "react-icons/io5";

export function Ribbon({}) {
  return (
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
  );
}
