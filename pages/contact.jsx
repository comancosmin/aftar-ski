export default function Contact() {
  return (
    <>
      <div className="flex lg:flex-row">
        <div className="lg:w-1/2 p-6">
          <form className="bg-custom-black p-6 rounded-lg ">
            <h2 className="text-2xl font-medium mb-4 text-white">Contact Us</h2>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" for="name">
                Name
              </label>
              <input
                className="bg-gray-800 p-2 rounded-lg w-full"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" for="email">
                Email
              </label>
              <input
                className="bg-gray-800 p-2 rounded-lg w-full"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                className="bg-gray-800 p-2 rounded-lg w-full"
                id="message"
                name="message"
              ></textarea>
            </div>
            <button
              className="bg-white hover:opacity-80 text-custom-black font-medium py-2 px-4 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 lg:p-6">
          <div className="relative h-full bg-gray-200 rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://maps.google.com/maps?q=Poiana%20Brasov&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-col ml-12 mb-20">
        <p className="text-white text-lg pb-4">
          Phone: <span className="text-2xl">0742179051</span>
        </p>
        <p className="text-white text-lg">
          Email: <span className="text-2xl">contact@aftarski.ro</span>
        </p>
      </div>
    </>
  );
}
