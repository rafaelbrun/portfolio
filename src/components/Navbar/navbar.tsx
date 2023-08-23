import Navbutton from "./navbutton";
import ThemeButton from "./themebutton";
import { HiMenu } from "react-icons/hi";

const TABS = ["Career", "Graduation", "Projects", "About"];

export default function Navbar() {
  const onClickTest = (tab: string) => {
    //TODO: navigate to reference
    console.log(`Navigate to ${tab}`);
  };

  return (
    <div className="fixed top-0 flex w-full items-center justify-end px-8 opacity-90 sm:justify-center lg:justify-end lg:px-72">
      <div className="hidden sm:flex">
        {TABS.map((tab) => {
          return (
            <Navbutton title={tab} onClick={() => onClickTest(tab)} key={tab} />
          );
        })}
      </div>
      <ThemeButton />
      <div>
        <HiMenu className="flex sm:hidden h-8 w-8 m-4 cursor-pointer text-darkred dark:text-white"/>
      </div>
    </div>
  );
}
