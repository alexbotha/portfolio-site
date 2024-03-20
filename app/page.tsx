"use client";
import alex from "@/public/alex2.jpg";
import Image from "next/image";
import { useState } from "react";
import {
  IconArrowNarrowRight,
  IconDownload,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <div className="fixed text-label flex items-center gap-8 justify-center pt-20">
      <div className="mr-14">
        <Image
          className="border rounded-full w-[auto] h-[auto] box-effect "
          src={alex}
          alt="profile photo"
        />
      </div>

      <div className="text-[25px]">
        <h1>
          Hi! I'm <span className="text-blue-600">Alex</span>.
        </h1>
        <div className="text-auto">
          <p>
            A <span className="text-blue-600">Full-Stack Developer </span>
            passionate about creating software solutions to help businesses
          </p>
        </div>
        <div className="gap-2 py-2 items-center text-base">
          <button
            onClick={() => setOpenResume(!openResume)}
            className="flex bg-white text-black hover:bg-blue-600 hover:text-white rounded-[40px] gap-2 p-4 font-bold transition-colors duration-300"
          >
            Resume
            <IconMenu2 />
          </button>
          <div
            className={`${openResume ? "cursor-pointer" : "invisible"} py-2`}
          >
            <Link href="/resume">
              <div className="flex gap-2 py-1 hover:text-blue-600 ">
                <IconArrowNarrowRight /> Open
              </div>
            </Link>
            <div className="flex gap-2 hover:text-blue-600">
              <IconDownload />
              <a href="/alex_botha_cv(1).pdf" download="alex_botha_cv.pdf">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
