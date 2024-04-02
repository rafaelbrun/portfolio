import type { Tabs } from "./Sections/types";

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
      className="mx-8 flex min-h-screen flex-col sm:mx-24"
    >
      {!!title && (
        <b className="mb-6 mt-12 flex flex-row  text-4xl tracking-widest text-darkred dark:text-white lg:text-6xl">
          {title.toUpperCase()}
        </b>
      )}
      {children}
    </section>
  );
};

export default Section;
