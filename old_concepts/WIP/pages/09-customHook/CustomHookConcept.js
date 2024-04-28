import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../../../src/components/AppBreadcrumbs";
import { MarkdownCard } from "../../../../src/components/MarkdownCard";
import { customHook } from "../../markdowns";

export const CustomHookConcept = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="custom-hook" />
      <MarkdownCard file={customHook} />
    </Stack>
  );
};
