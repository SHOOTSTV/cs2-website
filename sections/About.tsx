import Image from "next/image";

export const About = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="container flex justify-center gap-16">
        <Image
          src="/images/about-profile.jpg"
          alt="About Hero"
          width={300}
          height={300}
          className="object-cover rounded-[12px] aspect-square"
        />
        <div className="py-8">
          <h2 className="text-2xl w-fit rounded-full bg-black text-white px-12 uppercase font-jaro mb-4">
            About Us
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            The leading company in <br /> the video game industry.
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            <br />
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
