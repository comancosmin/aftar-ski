import ImagesGrid from "@/components/ImagesGrid";
import Parallax from "@/components/Parallax";
import Head from "next/head";

export default function Season2023() {
  return (
    <>
      <Head>
        <title>Aftarski | Season 2023</title>
      </Head>
      <div className="text-white py-5">
        <p className="flex justify-center tracking-widest uppercase text-xs py-2">
          all begins from here..
        </p>
        <h1 className="flex justify-center text-4xl font-bold text-center pb-0">
          Season 2023
        </h1>
      </div>
      <ImagesGrid />
    </>
  );
}
