export default function Layout1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      l1{children}
    </div>
  );
}
