import NavBar from "../components/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="overflow-x-hidden"
      style={{
        backgroundImage: "url('/media/textures/3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      {children}
    </div>
  );
}
