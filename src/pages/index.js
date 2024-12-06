import Image from "next/image";
import me from "../assets/mimmi.png";
import About from "../components/About";
import { Inter } from "next/font/google";
import { animate, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row justify-center sm:items-center md:py-4">
        <div className="md:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Image
              className="w-[400px] lg:w-[500px] xl:w-[600px]"
              src={me}
              alt="Picture of the author"
              priority
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0, y: [0, -20, 0] }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
          className="md:w-2/4 md:pl-2 lg:pl-10 pl-6 md:pt-0 pt-4"
        >
          <div className="text-4xl md:text-5xl lg:text-7xl leading-none tracking-wide">
            FRONTEND
          </div>
          <div className="text-2xl md:text-3xl lg:text-5xl leading-none tracking-widest">
            DEVELOPER
          </div>
          <div className="text-lg md:text-[25px] lg:text-[30px] text-[#ADE7EF] leading-none tracking-wide mt-2">
            CODE WITH A CREATIVE TOUCH
          </div>
          <div>
            <About />
          </div>
        </motion.div>
      </div>
      <div></div>
    </main>
  );
}
