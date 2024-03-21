import { cn } from "~/utils/common";

type Props = {
  onClick: () => void;
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

const AppButton = ({ onClick, title, icon, className = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn({
        "flex w-fit flex-row items-center gap-1 rounded-full bg-red-700 px-2 py-1":
          true,
        "text-xs font-bold text-white": true,
        "hover:bg-red-800 sm:gap-2 sm:px-6 sm:py-2 sm:text-base": true,
        [className]: true,
      })}
    >
      {title}
      <div className="flex h-3 w-3 sm:h-5 sm:w-5">{icon && icon}</div>
    </button>
  );
};

export default AppButton;
