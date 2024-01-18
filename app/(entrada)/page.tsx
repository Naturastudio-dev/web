import Link from "next/link";
import { Routes } from "../../constants/routes";
import Image from "next/image";

export default function Home() {
  const n = Math.floor(Math.random() * 4) + 1;
  return (
    <main className="bg-no-repeat h-screen w-screen bg-center bg-cover overflow-hidden bg-secondary">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover h-screen w-screen brightness-75"
      >
        <source src={`/media/bgVideos/${n}.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0">
        <Link href={Routes.inicio}>
          <div className="sm:text-5xl text-4xl font-thin sm:my-56 my-32 text-center text-white flex justify-center">
            <Image
              alt="Naturastudio logo"
              src="/logos/logo-blanc.svg"
              width={600}
              height={300}
              className="w-full h-auto max-w-[600px] "
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
