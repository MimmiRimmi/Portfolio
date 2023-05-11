import Card from "./Card";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";

const Techstack = () => {
  return (
    <div className="min-h-screen mt-12 md:mt-24">
      <div className="flex flex-col justify-center items-center">
        <div className="text-lg md:text-3xl leading-relaxed font-bold">
          My Tech Stack
        </div>
        <h1 className="text-sm md:text-2xl pb-8">
          Technologies I&apos;ve been working with recently
        </h1>
        <div className="md:border rounded-xl flex flex-wrap justify-center">
          <div>
            <Card
              icon={
                <AiFillHtml5 style={{ color: "#e34c26", fontSize: "3em" }} />
              }
              title={"HTML"}
            />
          </div>
          <div>
            <Card
              icon={<DiCss3 style={{ color: "#2965f1", fontSize: "3em" }} />}
              title={"CSS"}
            />
          </div>
          <div>
            <Card
              icon={
                <SiJavascript
                  style={{
                    color: "#F0DB4F",
                    backgroundColor: "#323330",
                    fontSize: "3em",
                  }}
                />
              }
              title={"Javascript"}
            />
          </div>
          <div>
            <Card
              icon={
                <FaReact
                  style={{
                    color: "#61dbfb",
                    backgroundColor: "#323330",
                    fontSize: "3em",
                  }}
                />
              }
              title={"React"}
            />
          </div>
          <div>
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
          </div>

          <Card
            icon={
              <AiFillGithub
                style={{
                  color: "#171515",
                  fontSize: "3em",
                }}
              />
            }
            title={"Github"}
          />

          <Card
            icon={
              <SiTailwindcss style={{ color: "#e34c26", fontSize: "3em" }} />
            }
            title={"Tailwind CSS"}
          />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
