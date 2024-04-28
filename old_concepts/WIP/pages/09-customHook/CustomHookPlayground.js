import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { CatFact } from "../../challenges/07-customHook";

export const CustomHookPlayground = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="custom-hook" />
      <CatFact />
    </Stack>
  );
};
