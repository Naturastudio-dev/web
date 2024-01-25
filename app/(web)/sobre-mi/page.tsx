import Footer from "@/app/components/ui/footer/footer";
import React from "react";

const WordCloud = () => {
  const importance3 = [
    "apasionada",
    "sensible",
    "soñadora",
    "detallista",
    "expresiva",
    "sutil",
    "exploradora",
    "curiosa",
    "profesional",
    "especial",
    "imprevisible",
    "familiar",
    "flexible",
    "auténtica",
    "sorprendente",
    "alegre",
    "entusiasta",
    "divertida",
    "agradable",
    "estratégica",
    "orgánica",
    "emotiva",
    "inspiradora",
    "mágica",
  ];
  const importance2 = [
    "creativa",
    "observadora",
    "empática",
    "original",
    "cercana",
    "aventurera",
  ];
  const importance1 = ["natural", " sostenible"];

  const splitHalf = (arr: string[]) => {
    const half = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(-half);
    return [firstHalf, secondHalf];
  };
  const [importance3a, importance3b] = splitHalf(importance3);
  const [importance2a, importance2b] = splitHalf(importance2);

  return (
    <div className="flex-col flex justify-center items-center max-w-md text-center text-light">
      <h4 className="text-xl text-neutral-400">{importance3a.join(" ")}</h4>
      <h3 className="  text-4xl text-neutral-300">{importance2a.join(" ")}</h3>
      <h2 className=" text-6xl text-secondary-50">{importance1.join(" ")}</h2>
      <h3 className="  text-4xl text-neutral-300">{importance2b.join(" ")}</h3>
      <h4 className="text-xl text-neutral-400">{importance3b.join(" ")}</h4>
    </div>
  );
};

const SobreMiPage = () => {
  return (
    <main>
      <WordCloud />
      <Footer />
    </main>
  );
};

export default SobreMiPage;
