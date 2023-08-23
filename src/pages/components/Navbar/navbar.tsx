import Navbutton from "./navbutton";
import ThemeButton from "./themebutton";

const TABS = ["Career", "Graduation", "Projects", "About"];

export default function Navbar() {
  const onClickTest = (tab: string) => {
    //TODO: navigate to reference
    console.log(`Navigate to ${tab}`);
  };

  return (
    <div className="fixed top-0 flex w-full items-center justify-end px-10 opacity-90">
      {TABS.map((tab) => {
        return (
          <Navbutton title={tab} onClick={() => onClickTest(tab)} key={tab} />
        );
      })}
      <ThemeButton />
    </div>
  );
}
