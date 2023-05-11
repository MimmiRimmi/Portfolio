import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <nav>
        <ul className="flex justify-center md:flex-row gap-4 md:gap-8 md:justify-end md:pr-20 py-6 font-bold text-lg">
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? "text-[#e67a5f]" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Techstack"
              className={
                router.pathname === "/Techstack" ? "text-[#e67a5f]" : ""
              }
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className={
                router.pathname === "/Projects" ? "text-[#e67a5f]" : ""
              }
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
