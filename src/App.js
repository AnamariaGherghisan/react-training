import { BrowserRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={12} md={2} sx={{ backgroundColor: "#003b95" }}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <AppRoutes />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};
