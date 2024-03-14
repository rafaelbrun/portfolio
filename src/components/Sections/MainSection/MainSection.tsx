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
      <div className="my-2 flex flex-col text-xs font-thin tracking-widest sm:flex-row sm:text-sm lg:my-4 lg:text-2xl">
        <p>Software Developer</p>
        <p className="invisible h-0 sm:visible sm:mx-4 sm:h-auto">|</p>
        <p>Computer Engineer</p>
      </div>
      <AppButton
        onClick={openCurriculum}
        title="Curriculum"
        icon={<ArrowTopRightOnSquareIcon />}
        className="mt-3"
      />
    </div>
  );
};

export default MainSection;
