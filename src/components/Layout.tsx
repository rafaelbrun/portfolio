import { exo2 } from "~/utils/fonts";
import Navbar from "./NavBar/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={exo2.className}>
      <Navbar />
      <div className="min-h-screen pt-16">{children}</div>
    </div>
  );
};

export default Layout;
