import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandMedium,
} from "@tabler/icons-react";

import Link from "next/link";

const githubURL = "https://github.com/alexbotha";
const linkedinURL = "https://www.linkedin.com/in/alexbotha1996/";
const mediumURL = "https://medium.com/@alexbotha_18115";

export default function Navbar() {
  return (
    <div className="flex flex-col-1 nav-styles">
      <div>
        <Link href="/">
          <strong>ALEX</strong> BOTHA
        </Link>
      </div>

      <div className="flex nav-styles gap-7">
        <Link href="/projects">PROJECTS</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      <div className="ml-6 flex gap-2.5">
        <a href={githubURL} target="_blank">
          <IconBrandGithub />
        </a>
        <a href={linkedinURL} target="_blank">
          <IconBrandLinkedin />
        </a>
        <a href={mediumURL} target="_blank">
          <IconBrandMedium />
        </a>
      </div>
    </div>
  );
}
