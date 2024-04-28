import Stack from "@mui/material/Stack";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";
import { MarkdownCard } from "../../components/MarkdownCard";
import { useState } from "../../markdowns";

export const UseStateConcept = () => {
  return (
    <Stack gap={2}>
      <AppBreadcrumbs pathPrefix="use-state" />
      <MarkdownCard file={useState} />
    </Stack>
  );
};
