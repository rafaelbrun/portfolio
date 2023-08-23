import type { NavbuttonProps } from "~/pages/interfaces/navbutton";

export default function Navbutton({ title, onClick }: NavbuttonProps) {
  const ref = `#${title.toLowerCase()}`;

  return (
    <a href={ref} className="p-5" onClick={onClick}>
      <div className="tracking-wider text-darkred dark:text-white">{title}</div>
    </a>
  );
}
