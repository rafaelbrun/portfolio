const CompressedWord = ({ word }: { word: string }) => {
  const firstLetter = word.split("")[0];
  const restOfWord = word.split("").slice(1).join("");

  return (
    <div className="group mx-4 lg:mx-6 flex max-w-fit text-red-800">
      <b className="animate-wiggle lg:text-6xl text-4xl group-hover:animate-none">
        {firstLetter}
      </b>
      <b className="lg:text-6xl text-4xl group-hover:opacity-0 group-hover:transition-opacity">
        .
      </b>
      <b className="-ms-2 w-0 -translate-x-8 transform lg:text-6xl text-4xl tracking-widest opacity-0 transition-all group-hover:w-20 lg:group-hover:w-36 group-hover:translate-x-0 group-hover:opacity-100">
        {restOfWord}
      </b>
    </div>
  );
};

export default CompressedWord;
