import React, { useState } from "react";
import Styles from "./Contact.module.scss";
import Form from "@onepercentio/one-ui/dist/components/Form";
import { validateEmail } from "@onepercentio/one-ui/dist/components/EmailInput";
import useAsyncControl from "@onepercentio/one-ui/dist/hooks/useAsyncControl";
import useShortIntl from "@onepercentio/one-ui/dist/hooks/useShortIntl";
import Text from "@onepercentio/one-ui/dist/components/Text";
import {
  AnimatedEntranceItem,
  EntranceType,
} from "@onepercentio/one-ui/dist/components/AnimatedEntrance";
import { FirebaseFormProps } from "@onepercentio/one-ui/dist/components/Form/Form";

type ContactTypes = "jobs" | "help";

const FORM_CONFIGS: {
  [K in ContactTypes]: (
    txt: ReturnType<typeof useShortIntl>["txt"]
  ) => FirebaseFormProps<{
    name: string;
    email: string;
    message: string;
  }>["config"];
} = {
  help: (txt) => ({
    name: {
      type: "text",
      validator: () => true,
      placeholder: txt("contact.help.placeholder.name"),
    },
    email: {
      validator: (e = "") =>
        validateEmail(e) ? true : txt("contact.errors.email"),
      type: "email",
      messages: {
        invalidEmail: txt("contact.errors.email"),
      },
      placeholder: txt("contact.help.placeholder.email"),
    },
    message: {
      type: "textarea",
      lines: 5,
      validator: (e) => (!!e ? true : ""),
      placeholder: txt("contact.help.placeholder.message"),
    },
  }),
  jobs: (txt) => ({
    name: {
      type: "text",
      validator: (e) => (!!e ? true : ""),
      placeholder: txt("contact.jobs.placeholder.name"),
    },
    email: {
      validator: (e = "") =>
        validateEmail(e) ? true : txt("contact.errors.email"),
      type: "email",
      messages: {
        invalidEmail: txt("contact.errors.email"),
      },
      placeholder: txt("contact.jobs.placeholder.email"),
    },
    message: {
      type: "textarea",
      lines: 5,
      validator: (e) => (!!e ? true : ""),
      placeholder: txt("contact.jobs.placeholder.message"),
    },
  }),
};

function FormWrapper({ type }: { type: ContactTypes }) {
  const { txt } = useShortIntl();
  const formSubmission = useAsyncControl();
  const [submitted, setSubmitted] = useState<boolean>();
  return (
    <>
      <Text type="boldTitle">{txt(`contact.${type}.title`)}</Text>
      <Text type="subtitle">{txt(`contact.${type}.description`)}</Text>

      <Form<any>
        config={FORM_CONFIGS[type](txt)}
        onSubmit={() => {}}
        submitBtn={{
          error: [() => <span>{txt("contact.jobs.action.status.error")}</span>],
          label: [
            () => <span>{txt(`contact.${type}.action.status.default`)}</span>,
          ],
          loading: [
            () => <span>{txt("contact.jobs.action.status.loading")}</span>,
          ],
          success: [
            () => <span>{txt("contact.jobs.action.status.success")}</span>,
          ],
        }}
        submitting={formSubmission.loading}
        submited={submitted}
        btnProps={{
          variant: "transparent",
        }}
      />
    </>
  );
}

/**
 * This holds the contact form for learning and jobs
 **/
export default function Contact() {
  return (
    <div className={Styles.container}>
      <div>
        <FormWrapper type="help" />
      </div>
      <div>
        <FormWrapper type="jobs" />
      </div>
    </div>
  );
}
