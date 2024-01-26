import NavBar from "../components/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden flex flex-col bg-secondary">
      <NavBar />
      <div className="w-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
