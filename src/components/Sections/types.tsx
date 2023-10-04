import MainSection from "../MainSection/MainSection";
import About from "./About";
import Career from "./Career";
import Graduation from "./Graduation";

interface ISection {
  element: React.JSX.Element;
  title: Tabs;
}

export enum Tabs {
  MAIN = "/",
  CAREER = "Career",
  ABOUT = "About",
  GRADUATION = "Graduation",
}

export const SECTIONS: ISection[] = [
  {
    element: <MainSection />,
    title: Tabs.MAIN,
  },
  {
    element: <Career />,
    title: Tabs.CAREER,
  },
  {
    element: <About />,
    title: Tabs.ABOUT,
  },
  {
    element: <Graduation />,
    title: Tabs.GRADUATION,
  },
];
