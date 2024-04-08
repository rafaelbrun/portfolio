import AppButton from "~/components/AppButton/AppButton";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import CompressedWord from "./CompressedWord";
import { shantell } from "~/utils/fonts";
import Link from "next/link";
import Image from "next/image";

const MainSection = () => {
  const openResume = () => {
    const newWindow = window.open(
      "https://drive.google.com/file/d/1fZ0rgnuLtAOsFhPYKa6PytBYOE6Y7Vzl/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="flex h-screen flex-col">
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
      <div className="mt-3 flex h-fit items-center gap-1 sm:gap-2">
        <Link href="https://github.com/rafaelbrun" target="_blank">
          <div className="relative h-6 w-6 rounded-full bg-white hover:opacity-80 sm:h-10 sm:w-10">
            <Image src="/images/github-logo.png" fill alt="Github" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/rgolin/" target="_blank">
          <div className="relative h-6 w-6 sm:h-10 sm:w-10">
            <Image
              src="/images/linkedin-logo.webp"
              layout="fill"
              alt="Linkedin"
              className="hover:opacity-80"
            />
          </div>
        </Link>
        <AppButton
          onClick={openResume}
          title="Resume"
          icon={<ArrowTopRightOnSquareIcon />}
        />
      </div>
      <div className="mt-8 flex max-w-xl flex-col gap-2 text-xs sm:text-base text-justify">
        <p>
          Constantly striving to create high-quality software, which I achieve
          through careful development, implementation of tests and thorough code
          reviews.
        </p>
        <p>
          I’ve experience dealing daily with developers, QA engineers, designers
          and Project Managers from around the globe, with my objective, clean
          and professional communication I’m able to maintain a good relation
          with whomever.
        </p>
        I am a quick learner and have a strong interest in emerging
        technologies. During my career, I’ve learned new stacks and I am always
        open to exploring new paths.
      </div>
      <div
        className={`flex h-full w-full items-center justify-center text-9xl sm:text-xxl ${shantell.className}`}
      >
        <p>{`<`}</p>
        <p>{`/>`}</p>
      </div>
    </div>
  );
};

export default MainSection;
