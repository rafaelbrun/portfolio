import { cn } from "~/utils/common";
import { Tabs } from "./Sections/types";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: Tabs;
}) => {
  return (
    <section
      id={title.toLowerCase()}
      className={cn({
        "flex h-fit flex-col bg-white dark:bg-darkred sm:px-24": true,
        "mt-40 py-12": title !== Tabs.MAIN,
      })}
    >
      {!!title && (
        <b className="mb-6 flex flex-row  text-4xl tracking-widest text-darkred dark:text-white lg:text-6xl">
          {title.toUpperCase()}
        </b>
      )}
      {children}
    </section>
  );
};

export default Section;
