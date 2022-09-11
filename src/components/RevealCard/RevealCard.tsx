import React, { useEffect, useRef, useState } from "react";
import Styles from "./RevealCard.module.scss";
import Text from "@onepercentio/one-ui/dist/components/Text";
import AdaptiveDialog from "@onepercentio/one-ui/dist/components/AdaptiveDialog";
import { RevealCardTestIds } from "./RevealCard.e2e";
import useC from "@onepercentio/one-ui/dist/hooks/useContainedRepositioning";

/**
 * A card that displays some info and reveal more info on hove
 **/
export default function RevealCard({
  title,
  short,
  long,
  bg,
}: {
  title: string;
  short: string;
  long: string;
  bg: string;
}) {
  const shortRef = useRef<HTMLParagraphElement>(null);
  const [isShowingFullText, setFull] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const { elementToCheck: rootRef } = useC(
    maxHeight !== 0,
    (el) => el.parentElement!.parentElement!,
    {
      scale: 1.1
    }
  );

  useEffect(() => {
    rootRef.current!.addEventListener("mouseenter", () => {
      setMaxHeight(shortRef.current!.scrollHeight);
    });
    rootRef.current!.addEventListener("mouseleave", () => {
      setMaxHeight(0);
    });
  }, []);
  return (
    <>
      <div
        ref={rootRef}
        className={Styles.root}
        data-testid={RevealCardTestIds.ROOT}
        style={{ backgroundImage: `url(${bg})` }}
        onClick={() => setFull(true)}
      >
        <div>
          <Text type="highlightTitle">{title}</Text>
          <Text ref={shortRef} type="highlight" style={{ maxHeight }}>
            <span>{short}</span>
          </Text>
        </div>
      </div>
      <AdaptiveDialog open={isShowingFullText} onClose={() => setFull(false)}>
        <Text type="highlightTitle">{title}</Text>
        <Text type="highlight" className={Styles.fullText}>
          {long}
        </Text>
      </AdaptiveDialog>
    </>
  );
}
