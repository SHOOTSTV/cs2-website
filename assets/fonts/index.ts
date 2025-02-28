import localFont from "next/font/local";

const fontJaro = localFont({
  src: "./Jaro-Regular.ttf",
  variable: "--font-jaro",
});

const fontJetbrainsMono = localFont({
  src: "./JetBrainsMono-Regular.ttf",
  variable: "--font-jetbrains-mono",
});

export { fontJaro, fontJetbrainsMono };
