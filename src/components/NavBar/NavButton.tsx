import { Tabs } from "../Sections/types";
import Link from "next/link";

type Props = {
  title: Tabs;
};

const NavButton = ({ title }: Props) => {
  const ref = `#${title.toLowerCase()}`;

  const isMain = title === Tabs.MAIN;

  return (
    <div className="group flex flex-col self-end">
      <Link
        href={ref}
        className="self-end text-xs tracking-wider text-darkred dark:text-white sm:text-start sm:text-base"
      >
        {isMain ? "RG" : title}
      </Link>
      <span className="h-0.25 max-w-0 transform bg-darkred transition-all group-hover:max-w-full dark:bg-white" />
    </div>
  );
};

export default NavButton;
