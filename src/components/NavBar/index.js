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
    label: "GitHub Challenge",
  },
  {
    path: "portfolio/challenge",
    label: "Portfolio Challenge",
  },
  {
    path: "class-based-component/concept",
    label: "Class-based Component",
  },
  {
    path: "state-and-lifecycle/concept",
    label: "State and Lifecycle",
  },
  {
    path: "class-based-counter/challenge",
    label: "Counter Challenge",
  },
  {
    path: "useState/concept",
    label: "UseState Hook",
  },
  {
    path: "event-handling/concept",
    label: "Event Handling",
  },
  {
    path: "form-submission/concept",
    label: "Form Submission",
  },
  {
    path: "mui/concept",
    label: "Material UI",
  },
  {
    path: "take-home-salary/challenge",
    label: "Take Home Salary Challenge",
  },
  {
    path: "random-password-generator/challenge",
    label: "Random Password Challenge",
  },
  {
    path: "useEffect/concept",
    label: "UseEffect Hook",
  },
  {
    path: "github-explorer/challenge",
    label: "GitHub Explorer Challenge",
  },
  {
    path: "weather-app/challenge",
    label: "Weather App Challenge",
  },
  {
    path: "useContext/concept",
    label: "UseContext Hook",
  },
  {
    path: "useReducer/concept",
    label: "UseReducer Hook",
  },
  {
    path: "simple-basket/challenge",
    label: "Simple Basket Challenge",
  },
  {
    path: "e-commerce/challenge",
    label: "E-Commerce Challenge",
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
        React JS
      </Typography>

      <Divider
        sx={{ my: 0.5, backgroundColor: "white", borderBottomWidth: "4px" }}
        variant="middle"
      />

      <Stack>
        {navLinks.map(({ path, label }, index) => (
          <Button
            sx={{ color: "white", justifyContent: "start" }}
            onClick={() => navigate(path)}
            key={label}
          >
            {index + 1 < 10 ? "0" : ""}
            {index + 1} - {label}
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
