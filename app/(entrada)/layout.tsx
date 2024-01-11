export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="overlow-hidden h-screen w-screen">{children}</div>;
}
