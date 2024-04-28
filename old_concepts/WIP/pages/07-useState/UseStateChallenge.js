import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../../../src/components/AppBreadcrumbs";
import { MarkdownCard } from "../../../../src/components/MarkdownCard";
import { useStateChallenge } from "../../markdowns";

export const UseStateChallenge = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-state" />
      <MarkdownCard file={useStateChallenge} />
    </Stack>
  );
};
