import type { NavbuttonProps } from "~/interfaces/NavButton";

const NavButton = ({ title }: NavbuttonProps) => {
  const ref = `#${title.toLowerCase()}`;

  return (
    <a href={ref} className="p-5">
      <div className="tracking-wider text-darkred dark:text-white">{title}</div>
    </a>
  );
}

export default NavButton;