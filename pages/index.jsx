import Head from "next/head";
import Image from "next/image";
import imageBus from "../images/index-images/bus.jpg";
import imageHouse from "../images/index-images/grajd.jpg";
import imagePub from "../images/index-images/pub.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aftarski | Home</title>
        <meta
          name="description"
          content="Aftarski din Poiana Brașov este un loc perfect pentru a vă relaxa după o zi plină de schi sau de plimbări pe munte. Oferta sa variată de băuturi rafinate și atmosfera sa prietenoasă vă vor face să vă simțiți ca acasă. Situat în inima orașului Poiana Brașov, acest bar oferă o priveliște impresionantă a munților și este perfect pentru a vă întâlni cu prietenii sau pentru a vă relaxa într-un mediu confortabil. Vizitați barul din Poiana Brașov pentru a vă bucura de o experiență relaxantă după o zi plină de aventură în munte."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../images/logo-image.jpg" />
      </Head>

      <main className="text-white min-h-max py-4 ">
        {/* Header Section */}
        <div className="pb-52">
          <p className="flex justify-center tracking-widest uppercase text-xs py-2">
            Welcome to AftarSki
          </p>
          <h1 className="flex justify-center text-4xl font-bold text-center">
            It&rsquo;s all about snow, ski and smiles.
          </h1>
        </div>

        {/* Places */}
        <div className="text-white -mt-40"></div>
        <h1 className="flex justify-center text-3xl font-bold text pb-8">
          Our places
        </h1>
        <div className="lg:flex lg:flex-col lg:items-center text-white">
          <p className="flex justify-start tracking-wide uppercase text-xsm">
            music, good vibe at..
          </p>
          <h1 className="flex justify-start text-2xl font-bold text-center">
            the bus
          </h1>
          <Image
            src={imageBus}
            alt="bus"
            className="rounded-3xl h-52 lg:h-2/6 w-full my-4 lg:w-4/5"
          />
        </div>
        <div className="pt-8 lg:flex lg:flex-col lg:items-center text-white">
          <p className="flex justify-start tracking-wide uppercase text-xsm">
            the best hot wine at..
          </p>
          <h1 className="flex justify-start text-2xl font-bold text-center">
            the stable
          </h1>
          <Image
            src={imageHouse}
            alt="house"
            className="rounded-3xl h-52 lg:h-2/6 w-full my-4 lg:w-4/5"
          />
        </div>
        <div className="pt-8 lg:flex lg:flex-col lg:items-center mb-10 text-white">
          <p className="flex justify-start tracking-wide uppercase text-xsm">
            awesome food at..
          </p>
          <h1 className="flex justify-start text-2xl font-bold text-center">
            the pub
          </h1>
          <Image
            src={imagePub}
            alt="pub"
            className="rounded-3xl h-52 lg:h-2/6 w-full my-4 lg:w-4/5"
          />
        </div>

        {/* About us Section */}
        <div className="about-us bg-custom-opacity text-white rounded-3xl lg:mx-60 py-6 mt-8">
          <h1 className="flex justify-center text-3xl font-bold text">
            About us
          </h1>
          <div className="mx-8">
            <p className="text-lg lg:px-20 py-8 lg:font-semibold text-center">
              Aftarski din Poiana Brașov este un loc perfect pentru a vă relaxa
              după o zi plină de schi sau de plimbări pe munte. Oferta sa
              variată de băuturi rafinate și atmosfera sa prietenoasă vă vor
              face să vă simțiți ca acasă.
            </p>
            <p className="text-lg lg:px-20 lg:font-semibold text-center pb-8">
              Situat în inima orașului Poiana Brașov, locul acesta oferă o
              priveliște superbă a munților și este perfect pentru a vă întâlni
              cu prietenii sau pentru a vă relaxa într-un mediu confortabil.
              Vizitați barul din Poiana Brașov pentru a vă bucura de o
              experiență relaxantă după o zi plină de aventură în munte.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
