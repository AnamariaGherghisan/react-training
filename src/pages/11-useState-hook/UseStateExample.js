import { useState } from "react";
import { PageInfo } from "../../components/PageInfo";

const ToggleButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export const UseStateExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<ToggleButton />}
    showPreviewButton
    code={`const ToggleButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};
    `}
  />
);
