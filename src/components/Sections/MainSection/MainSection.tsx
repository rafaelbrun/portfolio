import AppButton from "~/components/AppButton/AppButton";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import CompressedWord from "./CompressedWord";

const MainSection = () => {
  const openCurriculum = () => {
    const newWindow = window.open(
      "https://drive.google.com/file/d/1fZ0rgnuLtAOsFhPYKa6PytBYOE6Y7Vzl/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <div className="flex">
        <b className="flex flex-row text-xl tracking-widest text-darkred dark:text-white sm:text-4xl lg:text-6xl">
          RAFAEL
        </b>
        <CompressedWord word="BRUN" />
        <b className="flex flex-row text-xl tracking-widest text-darkred dark:text-white sm:text-4xl lg:text-6xl">
          GOLIN
        </b>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p className="text-xs font-thin tracking-widest sm:text-sm lg:my-4 lg:text-2xl">
          Software Developer
        </p>
        <p className="invisible h-0 text-xs font-thin tracking-widest sm:visible sm:mx-4 sm:h-auto sm:text-sm lg:my-4 lg:text-2xl">
          |
        </p>
        <p className="text-xs font-thin tracking-widest sm:text-sm lg:my-4 lg:text-2xl">
          Computer Engineer
        </p>
      </div>
      <AppButton
        onClick={openCurriculum}
        title="Curriculum"
        icon={<ArrowTopRightOnSquareIcon width={20} height={20} />}
      />
    </div>
  );
};

export default MainSection;
