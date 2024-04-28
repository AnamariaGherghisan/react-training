import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { AppBreadcrumbs } from "../AppBreadcrumbs";
import { MarkdownCard } from "../MarkdownCard";

export const PageInfo = ({
  title,
  pathPrefix,
  file,
  playground,
  code,
  showPreviewButton,
  isChallenge,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Container maxWidth="xl">
      <Stack gap={2}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ my: 2 }}
        >
          {title}
        </Typography>
        <AppBreadcrumbs pathPrefix={pathPrefix} isChallenge={isChallenge} />
        {file && <MarkdownCard file={file} />}
        {code && (
          <CopyBlock
            text={code}
            language="jsx"
            theme={dracula}
            showLineNumbers
            wrapLongLines
          />
        )}
        {showPreviewButton && (
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={() => setShowPreview(!showPreview)} />}
              label="Show component"
            />
          </FormGroup>
        )}
        {showPreview ? playground : null}
        {!showPreviewButton ? playground : null}
      </Stack>
    </Container>
  );
};
