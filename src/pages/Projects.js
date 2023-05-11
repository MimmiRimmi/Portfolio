import Card2 from "./Card2";
import radioPlayer from "../assets/Radioplayer.png";
import WorldTime from "../assets/WorldTime.png";
import Quiz from "../assets/Quiz.png";

const Projects = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-lg md:text-3xl font-bold">My projects</div>
        <h1 className="text-sm md:text-2xl">
          A selection of the things I&apos;ve built so far
        </h1>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16 flex flex-col gap-6 md:gap-0 md:flex-row">
          <Card2
            img={radioPlayer}
            title={"Radio player with React"}
            text={
              "In this project I used the API of Sveriges Radio (Swedish Radio) to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player."
            }
            tech={"HTML, Tailwind, Javascript, React"}
            livePreview={"https://radio-player-react-five.vercel.app/"}
            viewCode={"https://github.com/MimmiRimmi/Radio-Player-React"}
          />
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
