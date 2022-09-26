import Styles from "./Portfolio.module.scss";
import { ReactComponent } from "assets/svg/recursion.svg";
import * as test from "assets/svg/recursion.svg";
import { useEffect, useRef } from "react";

export default function PortfolioBG() {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursors =
      svgRef.current!.children[0]!.children[2]!.querySelectorAll("svg > g");

    svgRef.current!.parentElement!.addEventListener("mousemove", ({ x, y }) => {
      for (let cursor of cursors)
        cursor!.setAttribute("transform", `translate(${x}, ${y})`);
    });
    svgRef.current!.parentElement!.addEventListener("mouseleave", () => {
      for (let cursor of cursors) cursor!.setAttribute("opacity", `0`);
    });
    svgRef.current!.parentElement!.addEventListener("mouseenter", () => {
      for (let cursor of cursors) cursor!.setAttribute("opacity", `1`);
    });
  }, []);
  return (
    <div ref={svgRef} className={Styles.root}>
      <ReactComponent />
    </div>
  );
}
