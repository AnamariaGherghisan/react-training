import { useState } from "react";
import Container from "@mui/material/Container";

import { Login } from "./components/Login";
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = () => {
    setIsLoggedIn(true);
  };

  const onFailure = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {!isLoggedIn ? (
        <Login title="Login" onSuccess={onSuccess} onFailure={onFailure} />
      ) : (
        <Jumbotron
          title="Bob Smith"
          subTitle="Hello, you are now authorised to use the website."
        />
      )}
    </Container>
  );
};
