import React, { Fragment, useEffect, useState } from "react";
import Styles from "./MyProjectBanner.module.scss";
import UncontrolledTransition from "@onepercentio/one-ui/dist/components/UncontrolledTransition";
import Text from "@onepercentio/one-ui/dist/components/Text";
import useShortIntl from "@onepercentio/one-ui/dist/hooks/useShortIntl";
import MyProjectBannerConfig from "./MyProjectBanner.config";
import Button from "@onepercentio/one-ui/dist/components/Button";
import Spacing from "@onepercentio/one-ui/dist/components/Spacing";
import { TransitionAnimationTypes } from "@onepercentio/one-ui/dist/components/Transition/Transition";

/**
 * A banner on homescreen to show my special projects
 **/
export default function MyProjectBanner() {
  const [project, setProject] = useState<typeof MyProjectBannerConfig[number]>(
    MyProjectBannerConfig[0]
  );
  const { txt } = useShortIntl();

  useEffect(() => {
    setInterval(() => {
      setProject((prev) => {
        const next = MyProjectBannerConfig.indexOf(prev) + 1;
        return MyProjectBannerConfig[next] || MyProjectBannerConfig[0];
      });
    }, 2000);
  }, []);

  return (
    <>
      <div className={Styles.root}>
        <Text type="title">{txt("myProjects.title")}</Text>
        <UncontrolledTransition
          contentClassName={Styles.content}
          transitionType={TransitionAnimationTypes.FADE}
        >
          <Fragment key={MyProjectBannerConfig.indexOf(project)}>
            <div>{project.bg}</div>
            <div className={Styles.projectDescription}>
              <Text type="highlightTitle">{project.title || <>&nbsp;</>}</Text>
              <Spacing size="small" />
              <Text type="highlight">{project.description || <>&nbsp;</>}</Text>
              <Spacing size="large" />
              <Button onClick={() => window.open(project.link, "_blank")} variant="filled">{txt("myProjects.knowMore")}</Button>
            </div>
          </Fragment>
        </UncontrolledTransition>
      </div>
    </>
  );
}
