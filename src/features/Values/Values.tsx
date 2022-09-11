import React, { useRef } from "react";
import Styles from "./Values.module.scss";
import { useIntl } from "react-intl";
import { Values } from "./Values.types";
import RevealCard from "components/RevealCard";
import useShortIntl from "@onepercentio/one-ui/dist/hooks/useShortIntl";
import useElementFit from "@onepercentio/one-ui/dist/hooks/useElementFit";
import InfinityScroll from "@onepercentio/one-ui/dist/components/InfinityScroll";

const valueToShow: {
  [v in Values]: true;
} = {
  quality: true,
  seamless: true,
  simplicity: true,
  adaptive: true,
  dx: true,
};

/**
 * What are the values that guide my development
 **/
export default function ValuesCarrousel() {
  const { txt } = useShortIntl();
  const { ref, itemsToShow } = useElementFit(400);
  return (
    <>
      <InfinityScroll
        ref={ref}
        pageClass={Styles.page}
        className={Styles.root}
        pageSize={itemsToShow}
        items={(Object.keys(valueToShow) as Values[]).map((v) => (
          <RevealCard
            title={txt(`values.${v}.title`)}
            short={txt(`values.${v}.shortDesc`)}
            long={txt(`values.${v}.fullDesc`)}
            bg=""
          />
        ))}
      />
    </>
  );
}
