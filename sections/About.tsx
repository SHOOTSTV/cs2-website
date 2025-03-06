import Image from "next/image";

export const About = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-16">
        <Image
          src="/images/about-profile.jpg"
          alt="About Hero"
          width={300}
          height={300}
          className="object-cover rounded-[12px] aspect-square"
        />
        <div className="py-8 text-center md:text-left">
          <h2 className="text-2xl w-fit rounded-full bg-black text-white mx-auto md:mx-0 px-12 uppercase font-jaro mb-4">
            About Us
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            The leading company in <br /> the video game industry.
          </h1>
          <p className="text-lg max-w-[550px] md:max-w-[650px] px-6 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
