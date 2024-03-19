import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

import Link from "next/link";

const githubURL = "https://github.com/alexbotha";
const linkedinURL = "https://www.linkedin.com/in/alexbotha1996/";
const mediumURL = "https://medium.com/@alexbotha_18115";

const hoverState = "transition-transform transform-gpu hover:scale-110 p-1 ";

export default function Navbar() {
  return (
    <div className="flex flex-col-1 nav-styles">
      <div>
        <Link href="/">
          <strong>ALEX</strong> BOTHA
        </Link>
      </div>

      <div className="flex nav-styles sm:gap-6 gap-2">
        <Link className="hover:underline" href="/projects">
          PROJECTS
        </Link>
        <Link className="hover:underline" href="/about">
          ABOUT
        </Link>
        <Link className="hover:underline" href="/contact">
          CONTACT
        </Link>
      </div>

      <div className="ml-8 flex sm:gap-2.5 gap-2">
        <a
          className={`rounded-full bg-blue-600 ${hoverState}`}
          href={githubURL}
          target="_blank"
        >
          <TbBrandGithubFilled />
        </a>
        <a
          className={`rounded bg-blue-600 ${hoverState}`}
          href={linkedinURL}
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          className={`rounded-full bg-blue-600 ${hoverState}`}
          href={mediumURL}
          target="_blank"
        >
          <FaMediumM />
        </a>
      </div>
    </div>
  );
}
