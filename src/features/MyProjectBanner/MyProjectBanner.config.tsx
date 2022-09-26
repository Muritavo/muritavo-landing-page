import { ReactElement } from "react";
import PortfolioBG from "./ProjectsBGs/Portfolio";
import Video from "./ProjectsBGs/Video";

import ReactMiniToolkitVideoSrc from "assets/videos/react-mini-toolkit.mp4";

type Project = {
  title: string;
  description: string;
  link: string;
  bg: ReactElement;
};

export default [
  {
    title: "",
    description: "",
    link: "/recursion",
    bg: <PortfolioBG />,
  },
  {
    title: "@muritavo/react-mini-toolkit",
    description:
      "Uma ferramenta para criar componentes react de maneira mais eficiente",
    link: "https://www.npmjs.com/package/@muritavo/react-mini-toolkit",
    bg: <Video src={ReactMiniToolkitVideoSrc} />,
  },
] as Project[];
