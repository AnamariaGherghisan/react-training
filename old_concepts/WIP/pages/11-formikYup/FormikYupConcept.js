import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { formikYup } from "../../markdowns";

export const FormikYupConcept = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="formik-yup" />
      <MarkdownCard file={formikYup} />
    </Stack>
  );
};
