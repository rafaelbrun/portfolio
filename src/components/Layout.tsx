import Navbar from "./NavBar/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">{children}</div>
    </>
  );
}
