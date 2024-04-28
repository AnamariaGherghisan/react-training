import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { useEffectChallenge } from "../../markdowns";

export const UseEffectChallenge = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-effect" />
      <MarkdownCard file={useEffectChallenge} />
    </Stack>
  );
};
