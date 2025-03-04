import { GameCard } from "../components/GameCard";

export const GameSeries = () => {
  const gameData = [
    {
      name: "	Counter-Strike",
      image: "/images/game-cs1.6.jpg",
      description:
        "Counter-Strike: Global Offensive is a first-person shooter video game developed by Valve Corporation.",
      releaseDate: "2000",
    },
    {
      name: "Counter-Strike: Condition Zero",
      image: "/images/game-cscz.jpg",
      description:
        "Counter-Strike: Condition Zero is a first-person shooter video game developed by Valve Corporation.",
      releaseDate: "2004",
    },
    {
      name: "Counter-Strike: Source",
      image: "/images/game-css.jpg",
      description:
        "Counter-Strike: Source is a first-person shooter video game developed by Valve Corporation.",
      releaseDate: "2004",
    },
    {
      name: "Counter-Strike: Global Offensive",
      image: "/images/game-csgo.jpg",
      description:
        "Counter-Strike: Global Offensive is a first-person shooter video game developed by Valve Corporation.",
      releaseDate: "2012",
    },
    {
      name: "Counter-Strike 2",
      image: "/images/game-cs2.jpg",
      description:
        "Counter-Strike 2 is a first-person shooter video game developed by Valve Corporation.",
      releaseDate: "2024",
    },
  ];
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="container">
        <h2 className="text-2xl w-fit rounded-full bg-black text-white px-12 uppercase font-jaro mb-8 ">
          PROJECTS
        </h2>
        <div className="space-y-16">
          <div className="grid grid-cols-3 gap-8">
            {gameData.slice(0, 3).map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            {gameData.slice(3).map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
