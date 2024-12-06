import Card from "../components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import NextJs from "../assets/nextjs.svg";
import DotNet from "../assets/dotnet.svg";
import CSharp from "../assets/csharp.svg";
import Azure from "../assets/azure.svg";

const Techstack = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-sm md:text-2xl">
          Technologies I&apos;ve been working with recently
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:border mt-12 rounded-xl max-w-[970px] md:mx-8 flex flex-wrap justify-center"
        >
          <Card
            icon={<AiFillHtml5 style={{ color: "#e34c26", fontSize: "3em" }} />}
            title={"HTML"}
          />
          <Card
            icon={<DiCss3 style={{ color: "#2965f1", fontSize: "3em" }} />}
            title={"CSS"}
          />
          <Card
            icon={
              <SiTailwindcss style={{ color: "#38bdf8", fontSize: "3em" }} />
            }
            title={"Tailwind CSS"}
          />
          <Card
            icon={
              <SiJavascript
                style={{
                  color: "#F0DB4F",
                  backgroundColor: "#323330",
                  fontSize: "2.8em",
                }}
              />
            }
            title={"Javascript"}
          />
          <Card
            icon={
              <FaReact
                style={{
                  color: "#61dbfb",
                  fontSize: "3em",
                }}
              />
            }
            title={"React"}
          />
          <Card
            icon={
              <SiRedux
                style={{
                  color: "#764abc",
                  fontSize: "3em",
                }}
              />
            }
            title={"Redux"}
          />
          <Card
            icon={<Image className="h-12 w-auto" src={NextJs} alt="Next.js" />}
            title="Next.js"
          />
          <Card
            icon={
              <FaVuejs
                style={{
                  color: "#42b883",
                  fontSize: "3em",
                }}
              />
            }
            title={"Vue.js"}
          />
          <Card
            icon={
              <AiFillGithub
                style={{
                  color: "#FFFFFF",
                  fontSize: "3em",
                }}
              />
            }
            title={"Github"}
          />
          <Card
            icon={<Image className="h-12 w-auto" src={DotNet} alt=".NET" />}
            title=".NET"
          />
          <Card
            icon={<Image className="h-12 w-auto" src={CSharp} alt="C#" />}
            title="C#"
          />
          <Card
            icon={<Image className="h-12 w-auto" src={Azure} alt="Azure" />}
            title="Azure"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Techstack;
