import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../../../src/components/AppBreadcrumbs";
import { RegistrationForm } from "../../challenges/09-formikYup";

export const FormikYupSolution = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="formik-yup" />
      <RegistrationForm />
    </Stack>
  );
};
