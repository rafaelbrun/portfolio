import { cn } from "~/utils/common";

const CompressedWord = ({ word }: { word: string }) => {
  const firstLetter = word.split("")[0];
  const restOfWord = word.split("").slice(1).join("");

  return (
    <div className="group mx-2 flex max-w-fit text-red-800 sm:mx-4 lg:mx-6">
      <b className="animate-wiggle text-xl group-hover:animate-none sm:text-4xl lg:text-6xl">
        {firstLetter}
      </b>
      <b className="text-xl group-hover:opacity-0 group-hover:transition-opacity sm:text-4xl lg:text-6xl">
        .
      </b>
      <b
        className={cn({
          "-ms-1 w-0 -translate-x-8 transform text-xl tracking-widest": true,
          "opacity-0 transition-all group-hover:w-12 group-hover:translate-x-0":
            true,
          "group-hover:opacity-100 sm:text-4xl lg:text-6xl lg:group-hover:w-36":
            true,
        })}
      >
        {restOfWord}
      </b>
    </div>
  );
};

export default CompressedWord;
