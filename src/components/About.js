import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row md:mt-2 mt-4">
          <a
            className="cursor-pointer"
            href={"https://se.linkedin.com/in/mimmi-rimmerfeldt-081684116"}
            target="_blank"
          >
            <div className="flex mr-4 gap-1 items-center">
              <AiFillLinkedin className="text-4xl" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            href={"https://github.com/MimmiRimmi"}
            target="_blank"
          >
            <div className="flex mr-4 gap-1 items-center">
              <AiFillGithub className="text-4xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
