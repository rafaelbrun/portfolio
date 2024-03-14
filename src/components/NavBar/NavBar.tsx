import { useCallback, useMemo, useState } from "react";
import NavButton from "./NavButton";
import ThemeButton from "./ThemeButton";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { SECTIONS } from "../Sections/types";

const NAVBAR_DEFAULT =
  "fixed z-50 backdrop-filter backdrop-blur dark:bg-darkred/20 top-0 flex w-full items-center justify-end px-4 " +
  "sm:justify-center lg:justify-end lg:px-72";
const NAVBAR_MENU =
  "fixed bg-red-400/50 dark:bg-red-950/50 backdrop-filter backdrop-blur sm:bg-white sm:dark:bg-transparent top-0 " +
  "right-0 flex items-end flex-col h-full px-4 sm:items-center z-50 sm:justify-center sm:right-1 sm:flex-row " +
  "sm:w-full sm:bg-white/20 sm:h-auto lg:justify-end lg:px-72";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const ListOfNavButtons = useMemo(
    () =>
      SECTIONS.map((section) => (
        <NavButton title={section.title} key={section.title} />
      )),
    []
  );

  return (
    <div className={isMenuOpen ? NAVBAR_MENU : NAVBAR_DEFAULT} role="menubar">
      <div className={"hidden space-x-12 sm:flex"}>{ListOfNavButtons}</div>
      <div className="flex flex-row justify-end ">
        <div className="mx-4 ms-12">
          <ThemeButton />
        </div>
        <div className="text-darkred-3xl my-4 flex cursor-pointer dark:text-white sm:hidden">
          {!isMenuOpen ? (
            <HiMenu onClick={toggleMenu} className="h-4 w-4 sm:h-6 sm:w-6" />
          ) : (
            <CgClose onClick={toggleMenu} className="h-4 w-4 sm:h-6 sm:w-6" />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`flex justify-self-center pb-3 sm:mt-0 sm:block sm:pb-0`}
        >
          <div className="my-8 flex flex-col items-center justify-center space-y-6 sm:hidden sm:space-x-6 sm:space-y-0">
            {ListOfNavButtons}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
