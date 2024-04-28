import { useState } from "react";
import { PageInfo } from "../../components/PageInfo";

const App = () => {
  const [firstName, setFirstName] = useState("");

  const handleOnChange = (event) => {
    const value = event.currentTarget.value;
    setFirstName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const uncontrolledInputValue =
      document.getElementById("uncontrolled").value;
    console.log("uncontrolledInputValue", uncontrolledInputValue);

    const controlledInputValue = firstName;
    console.log("controlledInputValue", controlledInputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="uncontrolled"
          placeholder="uncontrolled"
          defaultValue=""
        />
      </div>

      <div>
        <input
          type="text"
          id="controlled"
          placeholder="controlled"
          value={firstName}
          onChange={handleOnChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export const FormSubmissionExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`const App = () => {
  const [firstName, setFirstName] = useState("");

  const handleOnChange = (event) => {
    const value = event.currentTarget.value;
    setFirstName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const uncontrolledInputValue =
      document.getElementById("uncontrolled").value;
    console.log("uncontrolledInputValue", uncontrolledInputValue);

    const controlledInputValue = firstName;
    console.log("controlledInputValue", controlledInputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="uncontrolled"
          placeholder="uncontrolled"
          defaultValue=""
        />
      </div>

      <div>
        <input
          type="text"
          id="controlled"
          placeholder="controlled"
          value={firstName}
          onChange={handleOnChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
    `}
  />
);
