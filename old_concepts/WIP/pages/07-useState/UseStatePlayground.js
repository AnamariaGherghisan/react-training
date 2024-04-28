import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { CounterImage } from "../../challenges/05-useState";

export const UseStatePlayground = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-state" />
      <CounterImage />
    </Stack>
  );
};
