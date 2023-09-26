import { useCallback, useMemo, useState } from "react";
import Navbutton from "./NavButton";
import ThemeButton from "./ThemeButton";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const TABS = ["Career", "Graduation", "Projects", "About"];
const NAVBAR_DEFAULT =
  "fixed top-0 flex w-full items-center justify-end px-8 opacity-90 sm:justify-center lg:justify-end lg:px-72";
const NAVBAR_MENU =
  "fixed top-0 right-0 flex flex-col h-full px-8 opacity-90 sm:justify-center sm:right-1 sm:flex-row sm:w-full sm:h-auto lg:justify-end lg:px-72";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const ListOfNavbuttons = useMemo(() => {
    return TABS.map((tab) => <Navbutton title={tab} key={tab} />);
  }, []);

  return (
    <div className={isMenuOpen ? NAVBAR_MENU : NAVBAR_DEFAULT} role="menubar">
      <div className={"hidden sm:flex"}>{ListOfNavbuttons}</div>
      <div className="flex flex-row">
        <ThemeButton />
        <div className="m-4 flex cursor-pointer text-darkred dark:text-white sm:hidden">
          {!isMenuOpen ? (
            <HiMenu onClick={openMenu} className="h-8 w-8" />
          ) : (
            <CgClose onClick={closeMenu} className="h-8 w-8" />
          )}
        </div>
      </div>
      <div
        className={`mt-8 flex justify-self-center pb-3 sm:mt-0 sm:block sm:pb-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="items-center justify-center space-y-8 sm:hidden sm:space-x-6 sm:space-y-0">
          {ListOfNavbuttons}
        </div>
      </div>
    </div>
  );
}

export default NavBar;