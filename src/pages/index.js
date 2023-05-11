import Image from "next/image";
import profilePic from "../assets/me2.jpeg";
import About from "./About.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen md:p-28 p-10">
      <div className="flex flex-row justify-center items-center">
        <div className="md:text-4xl w-2/4 font-extrabold leading-relaxed text-[#e67a5f]">
          Hi, My name is <br /> Mimmi <br /> and I build things for the web!
        </div>
        <div className="w-[140px] h-[140px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full border-4 border-[#e88870] m-2.5">
          <Image
            className="inline"
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div>
        <About />
      </div>
    </main>
  );
}
