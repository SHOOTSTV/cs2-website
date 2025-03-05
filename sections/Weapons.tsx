"use client";

import WeaponModel from "@/components/WeaponModel";
import { WeaponStat } from "@/components/WeaponStat";
import { useState } from "react";

export const Weapons = () => {
  const [currentWeaponIndex, setCurrentWeaponIndex] = useState(0);

  const weaponStats = [
    {
      name: "AK-47",
      damage: 36,
      fireRate: 600,
      price: "$2,700",
      model: "/weapons/ak47.glb",
      precision: 75,
    },
    {
      name: "AWP",
      damage: 115,
      fireRate: 41.24,
      price: "$4,750",
      model: "/weapons/awp.glb",
      precision: 95,
    },
  ];

  const currentWeapon = weaponStats[currentWeaponIndex];

  const handlePrevious = () => {
    setCurrentWeaponIndex((prev) =>
      prev === 0 ? weaponStats.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentWeaponIndex((prev) =>
      prev === weaponStats.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#383838]">
      <div className="container flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl text-white tracking-widest uppercase">
          Weapons
        </h1>
        <div className="w-full  relative h-[40vh]">
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-white/20 text-white cursor-pointer aspect-square size-10"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-white/20 text-white cursor-pointer aspect-square size-10"
          >
            →
          </button>
          <WeaponModel
            modelName={currentWeapon.name}
            modelPath={currentWeapon.model}
          />
        </div>
        <h2 className="text-white text-2xl uppercase">{currentWeapon.name}</h2>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <WeaponStat
            label={"DAMAGE"}
            labelValue={currentWeapon.damage}
            width={(currentWeapon.damage / 115) * 100}
          />

          <WeaponStat
            label={"FIRERATE"}
            labelValue={currentWeapon.fireRate}
            width={(currentWeapon.fireRate / 600) * 100}
          />

          <WeaponStat
            label={"PRECISION"}
            labelValue={currentWeapon.precision}
            width={currentWeapon.precision}
          />
        </div>
        <p className="text-white">Price: {currentWeapon.price}</p>
      </div>
    </section>
  );
};
