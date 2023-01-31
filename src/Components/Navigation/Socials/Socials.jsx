import { BsMastodon, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
export default function Socials() {
  return (
    <div className=" flex justify-center gap-8 text-slate-400 ">
      <a href="https://mastodon.ie/@cordovez" className="text-lg hover:text-xl">
        <BsMastodon />
      </a>
      <a
        href="https://www.linkedin.com/in/cordovez/"
        className="text-lg hover:text-xl"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/cordovez" className="text-lg hover:text-xl">
        <BsGithub />
      </a>
      <a
        href="mailto:cordovez@el-cordovez.com"
        className="text-lg hover:text-xl"
      >
        <FiMail />
      </a>
    </div>
  );
}
