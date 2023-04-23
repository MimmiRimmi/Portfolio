import Image from "next/image";
import { AiFillGithub } from "react-icons/Ai";
import { MdOutlinePreview } from "react-icons/Md";

const Card2 = (props) => {
  const { img, title, text, tech, livePreview, viewCode } = props;
  return (
    <section className="flex flex-col border border-white bg-white rounded-xl w-[300px] mx-4 overflow-hidden">
      <Image src={img} width={"180px"} />
      <div className="px-4 pt-4 pb-5 text-sm">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="pt-2">{text}</p>
        <p className="pt-4 font-semibold">
          Tech stack : <span className="font-normal"> {tech} </span>
        </p>
        <div className="flex justify-between pt-4">
          <a
            className="underline cursor-pointer"
            href={livePreview}
            target="_blank"
          >
            <div className="flex gap-1 items-center">
              <MdOutlinePreview /> Live preview
            </div>
          </a>
          <a
            className="underline cursor-pointer"
            href={viewCode}
            target="_blank"
          >
            <div className="flex gap-1 items-center">
              <AiFillGithub /> View code
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card2;
