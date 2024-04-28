import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { GitHubInfo } from "../../challenges/06-useEffect/solved";

export const UseEffectSolution = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-effect" />
      <GitHubInfo />
    </Stack>
  );
};
