import type { Tabs } from "./Sections/types";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: Tabs;
}) => {
  return (
    <section id={title.toLowerCase()} className="flex min-h-screen">
      {children}
    </section>
  );
};

export default Section;
