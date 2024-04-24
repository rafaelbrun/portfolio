import MainSection from "./MainSection/MainSection";
import Career from "./Career";
import Education from "./Education";
import Skills from "./Skills";

interface ISection {
  element: React.JSX.Element;
  title: Tabs;
}

export enum Tabs {
  MAIN = "",
  SKILLS = "Skills",
  CAREER = "Career",
  EDUCATION = "Education",
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
    element: <Education />,
    title: Tabs.EDUCATION,
  },
];
