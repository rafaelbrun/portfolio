import CompressedWord from "./CompressedWord";

const MainSection = () => {
  return (
    <div className="mx-8 my-24 flex flex-col sm:mx-24">
      <div className="flex">
        <b className="flex flex-row text-4xl tracking-widest text-darkred dark:text-white lg:text-6xl">
          RAFAEL
        </b>
        <CompressedWord word="BRUN" />
        <b className="flex flex-row text-4xl tracking-widest text-darkred dark:text-white lg:text-6xl">
          GOLIN
        </b>
      </div>
      <span className="my-2 text-lg font-thin tracking-widest lg:my-4 lg:text-2xl">
        Software Developer | Computer Engineer
      </span>
    </div>
  );
};

export default MainSection;
