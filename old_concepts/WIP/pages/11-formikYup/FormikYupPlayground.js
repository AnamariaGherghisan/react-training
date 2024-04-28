import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { RegistrationForm } from "../../challenges/09-formikYup";

export const FormikYupPlayground = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="formik-yup" />
      <RegistrationForm />
    </Stack>
  );
};
