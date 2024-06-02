import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";

export const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={!isCollapsed ? 3 : 1}
          sx={{ backgroundColor: "#003b95" }}
        >
          <Stack gap={1}>
            {!isCollapsed ? (
              <IconButton
                sx={{ color: "white" }}
                onClick={() => setIsCollapsed(true)}
              >
                <KeyboardDoubleArrowLeftIcon />
              </IconButton>
            ) : (
              <IconButton
                sx={{ color: "white" }}
                onClick={() => setIsCollapsed(false)}
              >
                <KeyboardDoubleArrowRightIcon />
              </IconButton>
            )}
            {!isCollapsed && <NavBar />}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={!isCollapsed ? 9 : 11}>
          <AppRoutes />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};
