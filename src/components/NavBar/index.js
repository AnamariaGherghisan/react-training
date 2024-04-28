import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const navLinks = [
  {
    path: "component/concept",
    label: "Component",
  },
  {
    path: "jsx/concept",
    label: "JSX",
  },
  {
    path: "hello-world/challenge",
    label: "Hello World Challenge",
  },
  {
    path: "props/concept",
    label: "Props",
  },
  {
    path: "lists/concept",
    label: "Lists",
  },
  {
    path: "github-directory/challenge",
    label: "GitHub Directory Challenge",
  },
  {
    path: "portfolio/challenge",
    label: "Portfolio Challenge",
  },
  {
    path: "event-handling/concept",
    label: "Event Handling",
  },
  {
    path: "form-submission/concept",
    label: "Form Submission",
  },
];

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Stack gap={2} sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ color: "white" }}
      >
        Booking Academy
      </Typography>

      <Divider
        sx={{ my: 0.5, backgroundColor: "white", borderBottomWidth: "4px" }}
        variant="middle"
      />

      <Stack>
        {navLinks.map(({ path, label }) => (
          <Button
            sx={{ color: "white" }}
            onClick={() => navigate(path)}
            key={label}
          >
            {label}
          </Button>
        ))}
      </Stack>

      <Divider
        sx={{ my: 0.5, backgroundColor: "white", borderBottomWidth: "4px" }}
        variant="middle"
      />
    </Stack>
  );
};
