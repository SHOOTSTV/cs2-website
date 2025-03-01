"use client";

import { AudioLines, Pause, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export const PlayAudio = () => {
  const [audio] = useState(new Audio("/soundtrack.mp3"));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Volume initial à 30%

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume;
  }, [volume, audio]);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggle}
        className="text-white hover:text-orange-500 transition-colors duration-300"
      >
        {playing ? <Pause /> : <AudioLines />}
      </button>
      {playing && (
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-white" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-orange-500 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};
