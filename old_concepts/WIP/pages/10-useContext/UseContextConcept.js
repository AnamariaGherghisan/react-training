import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../../../src/components/AppBreadcrumbs";
import { MarkdownCard } from "../../../../src/components/MarkdownCard";
import { useContext } from "../../markdowns";

export const UseContextConcept = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-context" />
      <MarkdownCard file={useContext} />
    </Stack>
  );
};
