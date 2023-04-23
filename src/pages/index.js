import Image from "next/image";
import profilePic from "../assets/me2.jpeg";
import About from "./About.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen p-28">
      <div className="flex flex-row justify-center items-center">
        <div className="text-4xl w-2/4 font-extrabold leading-relaxed text-[#e67a5f]">
          Hi, My name is <br /> Mimmi <br /> and I build things for the web!
        </div>
        <div className="image-cropper w-2/4">
          <Image className="img" src={profilePic} alt="Picture of the author" />
        </div>
      </div>
      <div className="">
        {/* <h2>About me</h2>
        <p>
          Stockholm based aspiring frontend developer with a background in
          accounting and theater. I like software development because it
          combines problem solving and creativity, and that's something I'm
          passionate about.
        </p> */}
        <About />
      </div>
    </main>
  );
}
