import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { useContextChallenge } from "../../markdowns";

export const UseContextChallenge = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-context" />
      <MarkdownCard file={useContextChallenge} />
    </Stack>
  );
};
