import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  return (
    <>
      <div className="relative text-left bg">
        <div className="flex flex-row">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-haspopup="true"
            className="mt-4 ml-4"
          >
            {isOpen ? (
              <IoCloseSharp className="h-8 w-8 text-[#ADE7EF] md:hidden" />
            ) : (
              <GiHamburgerMenu className="h-8 w-8 text-[#ADE7EF] md:hidden" />
            )}
          </button>
          <div className="text-center md:hidden text-xl font-thin mt-5 flex-1 mr-8">
            MIMMI RIMMERFELDT
          </div>
        </div>

        {/* MOBILE */}
        {isOpen && (
          <div className="md:hidden absolute ml-4 w-32 bg-[#2d3d3f] z-50 rounded">
            <nav>
              <ul className="flex flex-col justify-center md:flex-row gap-4 pl-4 py-8 font-bold">
                <li>
                  <Link
                    href="/"
                    className={
                      router.pathname === "/"
                        ? "text-[#ADE7EF]"
                        : "text-[#FFFFFF]"
                    }
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Techstack"
                    className={
                      router.pathname === "/Techstack"
                        ? "text-[#ADE7EF]"
                        : "text-[#FFFFFF]"
                    }
                  >
                    TECH STACK
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Projects"
                    className={
                      router.pathname === "/Projects"
                        ? "text-[#ADE7EF]"
                        : "text-[#FFFFFF]"
                    }
                  >
                    PROJECTS
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      {/* LAPTOP & DESKTOP */}
      <div className="hidden md:block">
        <nav>
          <ul className="flex flex-col justify-center md:flex-row gap-4 md:gap-8 md:justify-end  md:pr-20 md:pl-10 py-6 font-bold md:text-2xl lg:text-3xl">
            <li className="text-[#FFFFFF] mr-auto md:pl-10 hidden md:block">
              <Link href="/">MIMMI RIMMERFELDT</Link>
            </li>
            <li>
              <Link
                href="/"
                className={
                  router.pathname === "/" ? "text-[#ADE7EF]" : "text-[#FFFFFF]"
                }
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/Techstack"
                className={
                  router.pathname === "/Techstack"
                    ? "text-[#ADE7EF]"
                    : "text-[#FFFFFF]"
                }
              >
                TECH STACK
              </Link>
            </li>
            <li>
              <Link
                href="/Projects"
                className={
                  router.pathname === "/Projects"
                    ? "text-[#ADE7EF]"
                    : "text-[#FFFFFF]"
                }
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
