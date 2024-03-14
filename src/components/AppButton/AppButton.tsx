type Props = {
  onClick: () => void;
  title: string;
  icon?: React.ReactNode;
};

const AppButton = ({ onClick, title, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row gap-2 rounded-full bg-red-700 px-6 py-2 text-white hover:bg-red-800"
    >
      {title}
      {icon && icon}
    </button>
  );
};

export default AppButton;
