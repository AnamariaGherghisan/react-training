import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export const AppBreadcrumbs = ({ pathPrefix, isChallenge }) => {
  const navigate = useNavigate();

  const challengeBreadcrumbs = [
    {
      label: "Challenge",
      path: "challenge",
    },
    {
      label: "Playground",
      path: "playground",
    },
  ];

  const breadcrumbs = [
    {
      label: "Concept",
      path: "concept",
    },
    {
      label: "Example",
      path: "example",
    },
    ...challengeBreadcrumbs,
    {
      label: "Solution",
      path: "solution",
    },
  ];

  return (
    <Breadcrumbs separator={"|"}>
      {(isChallenge ? challengeBreadcrumbs : breadcrumbs).map(
        ({ label, path }) => (
          <Typography
            color="text.primary"
            variant="caption"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => {
              navigate(`/${pathPrefix}/${path}`);
            }}
            key={label}
          >
            {label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};
