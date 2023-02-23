import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import Snowfall from "react-snowfall";
import { item, container } from "@/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
import logoImage from "../images/logo-image.jpg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 bg-custom-black">
      <div>
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          color="#fff"
        />
      </div>
      <Image className="w-36 lg:w-44 " src={logoImage} alt="logo-image"></Image>
      <Link href={"/live-cam"}>
        <h1 className="text-white text-sm ">
          Aftarski
          <span class="relative">
            <span class="w-2 h-2 mx-2 mt-1 bg-red-600 rounded-full absolute pulse"></span>
          </span>
        </h1>
        <h1 className="text-white text-sm font-bold">Live CAM </h1>
      </Link>
      {isOpen && (
        <div className="absolute left-0 top-0 bg-custom-black p-4 w-full min-h-full full-black lg:w-96 text-3xl z-25">
          <Snowfall
            snowflakeCount={50}
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
            }}
          />
          <div className="flex items-center flex-col  h-screen overflow-hidden container-nav">
            <m.ul variants={container} initial="hidden" animate="show">
              <div className="links">
                <div className="overflow-hidden">
                  <m.li variants={item} className="pb-2">
                    <Link
                      href={"/"}
                      className="text-white block py-2 pt-16 hover:opacity-80"
                      onClick={() => setOpen(!isOpen)}
                    >
                      ❅ Home
                    </Link>
                  </m.li>
                </div>
                <div className="overflow-hidden">
                  <m.li variants={item} className="pb-2">
                    <Link
                      href={"/menu"}
                      className="text-white block py-2  hover:opacity-80"
                      onClick={() => setOpen(!isOpen)}
                    >
                      ❅ Menu
                    </Link>
                  </m.li>
                </div>
                <div className="overflow-hidden">
                  <m.li variants={item} className="pb-2">
                    <Link
                      href={"/season-2023"}
                      className="text-white block py-2  hover:opacity-80"
                      onClick={() => setOpen(!isOpen)}
                    >
                      ❅ Season <strong>2023</strong>
                    </Link>
                  </m.li>
                </div>
                <div className="overflow-hidden hidden">
                  <m.li variants={item} className="pb-2">
                    <Link
                      href={"/contact"}
                      className="text-white block py-2  hover:opacity-80"
                      onClick={() => setOpen(!isOpen)}
                    >
                      ❅ Contact
                    </Link>
                  </m.li>
                </div>
                <div className="overflow-hidden">
                  <m.li variants={item} className="pb-2 ">
                    <Link
                      href={"/live-cam"}
                      className="text-white block py-2  hover:opacity-80 "
                      onClick={() => setOpen(!isOpen)}
                    >
                      ❅ Live Cam
                    </Link>
                  </m.li>
                </div>
              </div>
            </m.ul>
            <m.ul>
              <div className="social-media -mt-36">
                <div className="overflow-hidden">
                  <m.li variants={item} className="pb-2 ">
                    <div className="flex gap-6">
                      <Link
                        href="https://www.facebook.com/aftarski"
                        className="px-3 text-white hover:text-gray-500"
                        target="_blank"
                      >
                        <FaFacebook className="fa-2x" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/aftarski/"
                        className="px-3 text-white hover:text-gray-500"
                        target="_blank"
                      >
                        <FaInstagram className="fa-2x" />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@aftarskiwebcamspoianabraso4002"
                        className="px-3 text-white hover:text-gray-500"
                        target="_blank"
                      >
                        <FaYoutube className="fa-2x" />
                      </Link>
                    </div>
                  </m.li>
                </div>
              </div>
            </m.ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
