import { useState, useContext, createContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { PageInfo } from "../../components/PageInfo";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const value = { isDark, setIsDark };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = () => {
  return useContext(AppContext);
};

const NavBar = () => {
  const { isDark, setIsDark } = useApp();

  const handleOnClick = () => {
    setIsDark(!isDark);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: isDark ? "#0d1b2a" : "#edede9" }}
    >
      <Toolbar>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDark} onChange={handleOnClick} />}
            label={isDark ? "On" : "Off"}
            sx={{ color: !isDark ? "#0d1b2a" : "#edede9" }}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

const Banner = () => {
  const { isDark } = useApp();

  return (
    <Paper
      elevation={3}
      sx={{ backgroundColor: isDark ? "#0d1b2a" : "#edede9", my: 2 }}
    >
      <Typography
        variant="h5"
        sx={{ p: 2, color: !isDark ? "#0d1b2a" : "#edede9" }}
      >
        {isDark ? "Dark Mode Active" : "Light Mode Active"}
      </Typography>
    </Paper>
  );
};

const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
};

export const UseContextExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`import { useState, useContext, createContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const value = { isDark, setIsDark };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = () => {
  return useContext(AppContext);
};

const NavBar = () => {
  const { isDark, setIsDark } = useApp();

  const handleOnClick = () => {
    setIsDark(!isDark);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: isDark ? "#0d1b2a" : "#edede9" }}
    >
      <Toolbar>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDark} onChange={handleOnClick} />}
            label={isDark ? "On" : "Off"}
            sx={{ color: !isDark ? "#0d1b2a" : "#edede9" }}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

const Banner = () => {
  const { isDark } = useApp();

  return (
    <Paper
      elevation={3}
      sx={{ backgroundColor: isDark ? "#0d1b2a" : "#edede9", my: 2 }}
    >
      <Typography
        variant="h5"
        sx={{ p: 2, color: !isDark ? "#0d1b2a" : "#edede9" }}
      >
        {isDark ? "Dark Mode Active" : "Light Mode Active"}
      </Typography>
    </Paper>
  );
};

const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
};
    `}
  />
);
