import Image from "next/image";

interface GameCardProps {
  name: string;
  image: string;
  description: string;
  releaseDate: string;
  index: number;
}

export const GameCard = ({
  name,
  image,
  description,
  releaseDate,
  index,
}: GameCardProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 w-full gap-2">
      <div
        className={`relative w-full aspect-square md:max-h-[200px] ${
          index % 2 === 0 ? "order-2 md:order-none" : ""
        }`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-xl object-cover aspect-video w-full"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-2">
          {description}
        </p>
        <p className="text-gray-500 text-sm font-medium">
          Date de sortie : {releaseDate}
        </p>
      </div>
    </div>
  );
};
