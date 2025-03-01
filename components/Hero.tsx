import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/home-hero.jpg"
        alt="CSGO Background"
        fill
        className="object-cover"
      />
      <div className="container z-10 text-white pl-16 w-full">
        <h1 className="text-4xl mb-3">
          The most{" "}
          <span className="font-bold">
            advanced <br />
            strategic
          </span>{" "}
          game.
        </h1>
        <p className="mb-10">Enhance your experience with us.</p>
        <button className="bg-white text-black rounded-full px-6 py-2 font-jaro text-lg transition-all duration-300 hover:bg-orange-500 hover:scale-95 cursor-pointer">
          EXPLORE
        </button>
      </div>
    </section>
  );
};
