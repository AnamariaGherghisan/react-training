import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../../../src/components/AppBreadcrumbs";
import { GitHubInfo } from "../../challenges/06-useEffect";

export const UseEffectPlayground = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-effect" />
      <GitHubInfo />
    </Stack>
  );
};
