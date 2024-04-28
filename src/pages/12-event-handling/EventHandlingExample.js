import { useState } from "react";
import { PageInfo } from "../../components/PageInfo";
import "./index.css";

const App = () => {
  const [username, setUsername] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (event) => {
    setUsername(event.currentTarget.value);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnClick = () => {
    setUsername();
  };

  return (
    <div>
      <div>
        <div className={isFocused ? "title title-focused" : "title"}>
          {username ? `Welcome - ${username}` : "Welcome"}
        </div>
        <div>Please enter your username</div>
      </div>
      <div>
        <input
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <button onClick={handleOnClick}>Clear</button>
      </div>
    </div>
  );
};

export const EventHandlingExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`const App = () => {
  const [username, setUsername] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (event) => {
    setUsername(event.currentTarget.value);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnClick = () => {
    setUsername();
  };

  return (
    <div>
      <div>
        <div className={isFocused ? "title title-focused" : "title"}>
          {username ? \`Welcome - \${username}\` : "Welcome"}
        </div>
        <div>Please enter your username</div>
      </div>
      <div>
        <input
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <button onClick={handleOnClick}>Clear</button>
      </div>
    </div>
  );
};
    `}
  />
);
