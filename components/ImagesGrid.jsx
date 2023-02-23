import Image from "next/image";
import images from "../public/images";
import React, { useState } from "react";

function ImagesGrid() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <>
      <div class="flex flex-wrap">
        {images.map((image, index) => (
          <div
            class="w-full md:w-1/3 py-3 px-2"
            onClick={() => setSelectedImage(index)}
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              style={{ objectFit: "cover", objectPosition: "center" }}
              key={index}
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div class="w-full max-w-sm">
            <Image src={images[selectedImage].src} width={800} height={600} />
            <button
              class="mt-5 py-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default ImagesGrid;
