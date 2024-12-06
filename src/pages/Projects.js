import Card2 from "../components/Card2";
import radioPlayer from "../assets/Radioplayer.png";
import WorldTime from "../assets/WorldTime.png";
import Quiz from "../assets/Quiz.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-sm md:text-2xl">
          A selection of the things I&apos;ve built so far
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black pt-12 pb-12 flex flex-col gap-6 md:gap-6 md:flex-row md:flex-wrap md:justify-center"
        >
          <Card2
            img={Quiz}
            title={"Quiz with Redux"}
            text={
              "This project is a quiz, where you also can create your own questions in the admin part. The focus in this project was to use global state with Redux and hooks-for-redux."
            }
            tech={"HTML, Tailwind, Javascript, React, Redux"}
            livePreview={"https://quiz-redux-five.vercel.app/"}
            viewCode={"https://github.com/MimmiRimmi/Quiz-redux"}
          />
          <Card2
            img={WorldTime}
            title={"World Time with React"}
            text={
              "This is a web page that shows what time it is in different cities of the world. In this project, among other things, React-router-dom and useParams are used."
            }
            tech={"HTML, Tailwind, Javascript, React"}
            livePreview={"https://world-time-lemon.vercel.app/"}
            viewCode={"https://github.com/MimmiRimmi/WorldTime"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
