import Image from "next/image";
import { useState } from "react";
import image1 from "../images/website-images/DSC_1534.jpg";
import image2 from "../images/website-images/DSC_1536.jpg";
import image3 from "../images/website-images/DSC_1543.jpg";
import image4 from "../images/website-images/DSC_1544.jpg";
import image5 from "../images/website-images/DSC_1546.jpg";
import image6 from "../images/website-images/DSC_1550.jpg";
import image7 from "../images/website-images/DSC_1551.jpg";
import image8 from "../images/website-images/DSC_1559.jpg";
import image9 from "../images/website-images/DSC_1560.jpg";
import image10 from "../images/website-images/DSC_1561.jpg";

const Parallax = () => {
  const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    for (let img of images) {
      const imageTop = img.getBoundingClientRect().top;

      const backgroundPositionY = `-${
        scrollPosition - imageTop / windowHeight
      }px`;

      img.style.backgroundPositionY = backgroundPositionY;
    }
  };

  return (
    <div className="wrapper">
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image1} alt="Image 1" layout="fill" />
        </div>
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image2} alt="Image 2" layout="fill" />
        </div>
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image} alt="Image 3" layout="fill" />
        </div>
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image} alt="Image 4" layout="fill" />
        </div>
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image} alt="Image 5" layout="fill" />
        </div>
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image} alt="Image 6" layout="fill" />
        </div>
        <div className="relative h-0" style={{ paddingBottom: "66.6%" }}>
          <Image src={image} alt="Image 7" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
