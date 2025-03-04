import Image from "next/image";

interface GameCardProps {
  name: string;
  image: string;
  description: string;
  releaseDate: string;
}

export const GameCard = ({
  name,
  image,
  description,
  releaseDate,
}: GameCardProps) => {
  return (
    <div className="max-w-[400px] mx-auto w-full">
      <Image
        src={image}
        alt={name}
        width={400}
        height={100}
        className="rounded-xl object-cover mb-4 aspect-video w-full"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        {description}
      </p>
      <p className="text-gray-500 text-sm font-medium">
        Date de sortie : {releaseDate}
      </p>
    </div>
  );
};
