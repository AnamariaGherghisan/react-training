import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { customHookChallenge } from "../../markdowns";

export const CustomHookChallenge = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="custom-hook" />
      <MarkdownCard file={customHookChallenge} />
    </Stack>
  );
};
