import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => (
  <footer className="container text-white min-w-full my-3">
    <div className=" flex items-center justify-between flex-col-reverse lg:flex-row ">
      <p className="text-sm py-3">&copy;2023 Aftar Ski by Aftar Stube</p>
      <div className="flex">
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
          href="https://www.youtube.com/watch?v=Qd1hEhbFa2A&ab_channel=AftarskiWebcamsPoianaBrasovGo"
          className="px-3 text-white hover:text-gray-500"
          target="_blank"
        >
          <FaYoutube className="fa-2x" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
