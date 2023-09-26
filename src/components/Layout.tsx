import Navbar from "./NavBar/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">{children}</div>
    </>
  );
}

export default Layout;