import { useState } from "react";

import { Control } from "./components/Control";
import { Jumbotron } from "./components/Jumbotron";
import { ReposButton } from "./containers/ReposButton";
import { ReposSelect } from "./containers/ReposSelect";

export const App = () => {
  const [mode, setMode] = useState("button");

  const handleClick = ({ currentTarget }) => {
    setMode(currentTarget.name);
  };

  const organisations = ["nodejs", "facebook", "mongodb"];

  return (
    <div className="container">
      <Jumbotron />

      <Control mode={mode} handleClick={handleClick} />

      {mode === "button" && <ReposButton organisations={organisations} />}

      {mode === "select" && <ReposSelect organisations={organisations} />}
    </div>
  );
};
