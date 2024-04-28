import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { formikYupChallenge } from "../../markdowns";

export const FormikYupChallenge = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="formik-yup" />
      <MarkdownCard file={formikYupChallenge} />
    </Stack>
  );
};
