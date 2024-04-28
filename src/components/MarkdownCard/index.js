import Markdown from "react-markdown";
import Card from "@mui/material/Card";
import { useMarkdown } from "../../useMarkdown";
import { LoadingSpinner } from "./LoadingSpinner";
import { MarkdownError } from "./MarkdownError";

export const MarkdownCard = ({ file }) => {
  const { markdown, isLoading, hasError } = useMarkdown(file);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (hasError) {
    return <MarkdownError />;
  }

  return (
    <Card sx={{ p: 3 }}>
      <Markdown>{markdown}</Markdown>
    </Card>
  );
};
