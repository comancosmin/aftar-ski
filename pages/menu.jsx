import Image from "next/image";
import firstImage from "/images/image-1.jpg";
import secondImage from "/images/image-2.jpg";
import thirdImage from "/images/pachete-sky.jpg";

export default function Menu() {
  return (
    <>
      <section id="menu">
        <div className="text-white py-5">
          <p className="flex justify-center tracking-wider uppercase text-[0.9rem]">
            hot wine, shots, food and more..
          </p>
          <h1 className="flex justify-center text-4xl font-bold text-center">
            Aftarski Menu
          </h1>
        </div>
        <div className="flex justify-center align-center flex-col">
          <Image className="mx-auto " src={firstImage} alt="menu-image"></Image>
          <Image className="mx-auto" src={secondImage} alt="menu-image"></Image>
          <h1 className="flex justify-center text-2xl font-bold text-center text-white">
            let&rsquo;s start the party..
          </h1>
          <Image
            className="mx-auto pt-5"
            src={thirdImage}
            alt="menu-image"
          ></Image>
        </div>
      </section>
    </>
  );
}
