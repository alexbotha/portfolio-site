"use client";
import alex from "@/public/alex2.jpg";
import Image from "next/image";
import { useState } from "react";
import {
  IconArrowNarrowRight,
  IconDownload,
  IconMenu2,
} from "@tabler/icons-react";

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
        <h1>Hi! I'm Alex.</h1>
        <div className="text-auto">
          <p>
            A Full-Stack Developer passionate about creating software solutions
            to help businesses
          </p>
        </div>
        <div className="gap-2 py-2 items-center text-base">
          <button
            onClick={() => setOpenResume(!openResume)}
            className="flex bg-white text-black hover:bg-blue-600 hover:text-white  rounded-[40px] gap-2 p-4 font-bold transition-colors duration-300"
          >
            Resume
            <IconMenu2 />
          </button>
          <div
            className={`${openResume ? "cursor-pointer" : "invisible"} pt-2`}
          >
            <div className="flex gap-2 hover:underline ">
              <IconArrowNarrowRight /> Open
            </div>
            <div className="flex gap-2 hover:underline">
              <IconDownload /> Download
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
