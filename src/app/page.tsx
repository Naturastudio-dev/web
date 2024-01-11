import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div
          className="bg-no-repeat h-screen bg-center bg-cover 
        brightness-90 "
        >
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover h-screen xl:h-auto"
          >
            <source src="/media/bgVideos/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0">
            <div className="sm:text-5xl text-4xl font-thin sm:my-56 my-32 mx-8 text-center text-white  flex justify-center">
              <div className="flex flex-col items-center z-50">
                <Image
                  alt="Naturastudio logo"
                  src="/logos/logo.svg"
                  width={600}
                  height={300}
                  className="w-full h-auto max-w-[600px] "
                />
              </div>
              Página en construcción
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
