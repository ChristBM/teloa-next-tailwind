
export default function Layout2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      l2{children}
    </div>
  );
}
