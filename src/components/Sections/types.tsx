import MainSection from "./MainSection/MainSection";
import Contact from "./Contact";
import Career from "./Career";
import Graduation from "./Graduation";
import Skills from "./Skills";

interface ISection {
  element: React.JSX.Element;
  title: Tabs;
}

export enum Tabs {
  MAIN = "",
  SKILLS = "Skills",
  CAREER = "Career",
  GRADUATION = "Graduation",
  CONTACT = "Contact",
}

export const SECTIONS: ISection[] = [
  {
    element: <MainSection />,
    title: Tabs.MAIN,
  },
  {
    element: <Skills />,
    title: Tabs.SKILLS,
  },
  {
    element: <Career />,
    title: Tabs.CAREER,
  },
  {
    element: <Graduation />,
    title: Tabs.GRADUATION,
  },
  {
    element: <Contact />,
    title: Tabs.CONTACT,
  },
];
