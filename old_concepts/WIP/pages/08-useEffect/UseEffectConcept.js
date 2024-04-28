import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { useEffect } from "../../markdowns";

export const UseEffectConcept = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-effect" />
      <MarkdownCard file={useEffect} />
    </Stack>
  );
};
