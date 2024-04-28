import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const OrgCard = ({ org }) => {
  return (
    <Card data-testid="org-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {org.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {org.location}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {org.public_repos} repos | {org.followers} followers
        </Typography>
      </CardContent>
      <CardActions>
        <Button data-testid="org-url" href={org.url}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};
