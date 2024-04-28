import axios from "axios";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { OrgCard } from "./OrgCard";
import { Repos } from "./Repos";

export const GitHubInfo = () => {
  const [org, setOrg] = useState();
  const [repos, setRepos] = useState();
  const [orgError, setOrgError] = useState("");
  const [reposError, setReposError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const orgResponse = await axios.get(
        "https://api.github.com/orgs/bookingcom"
      );

      const repoResponse = await axios.get(
        "https://api.github.com/orgs/bookingcom/repos"
      );

      if (orgResponse.status === 200) {
        setOrgError("");
        setOrg(orgResponse.data);
      }

      if (repoResponse.status === 200) {
        setReposError("");
        setRepos(repoResponse.data);
      }

      if (orgResponse.status !== 200) {
        setOrgError(
          "Failed to load organisation information, please try again."
        );
      }

      if (repoResponse.status !== 200) {
        setReposError("Failed to load the repositories, please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <Stack data-testid="github-info" gap={3}>
      <Typography
        data-testid="org-title"
        variant="h3"
        component="div"
        sx={{ textAlign: "center" }}
      >
        Booking.com
      </Typography>
      {orgError && (
        <Alert severity="error" data-testid="org-error">
          {orgError}
        </Alert>
      )}
      {org && <OrgCard org={org} />}

      <Typography
        data-testid="repos-title"
        variant="h3"
        component="div"
        sx={{ textAlign: "center" }}
      >
        Repositories
      </Typography>
      {reposError && (
        <Alert severity="error" data-testid="repos-error">
          {reposError}
        </Alert>
      )}
      {repos && <Repos repos={repos} />}
    </Stack>
  );
};
