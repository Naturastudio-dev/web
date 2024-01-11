import NavBar from "../components/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="overflow-x-hidden flex flex-col"
      style={{
        backgroundImage: "url('/media/textures/3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl flex flex-col">{children}</div>
      </div>
    </div>
  );
}
