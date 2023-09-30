import type { NavbuttonProps } from "~/interfaces/NavButton";

const NavButton = ({ title }: NavbuttonProps) => {
  const ref = `#${title.toLowerCase()}`;

  return (
    <div className="group flex flex-col self-end">
      <a
        href={ref}
        className="self-end tracking-wider text-darkred dark:text-white sm:text-start"
      >
        {title}
      </a>
      <span className="h-0.25 max-w-0 transform bg-darkred transition-all group-hover:max-w-full dark:bg-white" />
    </div>
  );
};

export default NavButton;
