import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
          sx={{ backgroundColor: "#0F1318" }}
        >
          <Stack gap={1}>
            {!isCollapsed ? (
              <Button
                variant="text"
                startIcon={<KeyboardDoubleArrowLeftIcon />}
                sx={{ color: "white" }}
                onClick={() => setIsCollapsed(true)}
                disableRipple
              />
            ) : (
              <Button
                variant="text"
                startIcon={<KeyboardDoubleArrowRightIcon />}
                sx={{ color: "white" }}
                onClick={() => setIsCollapsed(false)}
                disableRipple
              />
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
