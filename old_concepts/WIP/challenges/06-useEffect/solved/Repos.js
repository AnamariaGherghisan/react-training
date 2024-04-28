import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Repos = ({ repos }) => {
  return (
    <Stack
      data-testid="repos"
      direction="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
    >
      {repos.map((repo) => (
        <Card
          sx={{
            width: 275,
            m: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          data-testid="repo-card"
          key={repo.id}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {repo.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {repo.description}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {repo.open_issues_count} issues | {repo.watchers_count} watchers
            </Typography>
          </CardContent>
          <CardActions>
            <Button data-testid="repo-url" href={repo.html_url}>
              View
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};
