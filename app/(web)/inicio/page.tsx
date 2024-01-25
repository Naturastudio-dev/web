import React from "react";
import AutoCarrousel from "./components/AutoCarrousel";
import Footer from "@/components/ui/footer/footer";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4 items-center ">
      <h1
        className={`font-hand text-4xl md:text-7xl text-white mb-4 text-center`}
      >
        ¿Qué es N.atura Studio?
      </h1>
      <p className="w-fit  text-center max-w-[800px]   text-2xl text-light">
        {` Natura Studio empezo en 2019, cuando un amigo me planteó una pregunta
        que, más tarde, se convertiría en LA pregunta: `}
      </p>

      <h2 className={`font-hand text-5xl text-white my-8 max-w-xl text-center`}>
        ¿Qué harás con todo este talento que tienes escondido?
      </h2>
      <p className="text-center max-w-3xl text-white">
        text totament provisional no tespantis!!!!!!!!!!!
        {`  En ese momento, inicialmente pensé que no era para tanto, pero su
        interrogante resonó en mí. Mi respuesta fue simple: "Supongo que ponerlo
        en marcha y mostrárselo al mundo ¿No?". Y así lo hice. Al llegar a mi
        estudio, me senté frente al ordenador, reflexionando sobre cómo podría
        crear una marca que expresara todo lo que significa para mí en una sola
        imagen. Quería que, con solo mirarla, se pudiera percibir todo lo que
        deseaba transmitir. Revisé todas mis fotos hasta ese momento, y en ese
        repaso encontré la imagen perfecta que necesitaba para inspirarme por
        completo. Esta fotografía me transportó a antiguos recuerdos de mi
        infancia, cuando solía ir a casa de mis abuelos y tomaba unas flores del
        jardín para mi madre. Aunque mi abuelo las llamara "mala hierba" porque
        pronto las cortaría para limpiar el jardín, para mí eran un tesoro. Sus
        colores vibrantes brillaban intensamente al sol, creando los mejores
        recuerdos de aquellos momentos felices. Desde entonces, comencé a ver y
        valorar la naturaleza de manera diferente, convirtiéndose en un elemento
        vital en mi día a día. Desde ese momento, el nombre de mi marca quedó
        claro: Natura Studio. Representa no solo mi enfoque natural en la
        fotografía, sino también mi compromiso con la vida natural que me rodea.
        La marca se convirtió en una extensión de mi conexión con la naturaleza
        y un medio para compartir esa conexión a través de mis imágenes
        congelando esos pequeños instantes vividos. Así empezó esta historia,
        narrada en pequeños momentos de vida.`}
      </p>

      <div className="rounded-3xl overflow-hidden">
        <AutoCarrousel />
      </div>

      <Footer />
    </main>
  );
};

export default HomePage;
