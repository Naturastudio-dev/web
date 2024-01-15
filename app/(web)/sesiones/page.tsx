import React from "react";
interface Sessio {
  cover: string;
  title: string; // winkle
  description: string;
  price: string;
}

const SesionesPage = () => {
  return (
    <div>
      <h1 className="text-secondary-50 text-5xl justify-center items-center w-full">
        Pack sesiones
      </h1>
      <ul className="flex gap-2 flex-col w-full">
        <li className="h-96">sesiones...</li>
        <li className="h-96 bg-red-400">sesiones...</li>
      </ul>
    </div>
  );
};

export default SesionesPage;
