import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import youtubeImage from "../images/youtube.jpg";

export default function LiveCam() {
  return (
    <>
      <Head>
        <title>Aftarski | Live Cam</title>
      </Head>
      <div className="text-white">
        <p className="flex justify-center tracking-widest uppercase text-xs py-2 text">
          AftarSki Live Webcam
        </p>
        <h1 className="flex justify-center text-4xl font-bold text-center">
          Look, enjoy, and don&rsquo;t forget to subscribe.
        </h1>
      </div>
      <div class="flex justify-center pb-8">
        <div className="my-28">
          <Link href="https://www.youtube.com/watch?v=rmqCPdZyJbE">
            <Image
              width={500}
              height={500}
              src={youtubeImage}
              alt="thumbnail"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
