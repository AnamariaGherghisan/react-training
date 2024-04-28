import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { Basket } from "../../challenges/08-useContext/solved";

export const UseContextSolution = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-context" />
      <Basket />
    </Stack>
  );
};
