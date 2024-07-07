import { useReducer } from "react";
import { PageInfo } from "../../components/PageInfo";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      count: 0,
    };
  }

  return state;
};

const App = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnClick = ({ target }) => {
    if (target.name === "increment") {
      dispatch({ type: "INCREMENT" });
    }

    if (target.name === "decrement") {
      dispatch({ type: "DECREMENT" });
    }

    if (target.name === "reset") {
      dispatch({ type: "RESET" });
    }
  };

  return (
    <Stack gap={3}>
      <Typography variant="h5" textAlign="center">
        Count: {state.count}
      </Typography>
      <Stack direction="row" justifyContent="space-evenly">
        <Button variant="contained" name="increment" onClick={handleOnClick}>
          Increment
        </Button>
        <Button variant="contained" name="decrement" onClick={handleOnClick}>
          Decrement
        </Button>
        <Button variant="contained" name="reset" onClick={handleOnClick}>
          Reset
        </Button>
      </Stack>
    </Stack>
  );
};

export const UseReducerExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`import { useReducer } from "react";
      
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      count: 0,
    };
  }

  return state;
};

const App = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnClick = ({ target }) => {
    if (target.name === "increment") {
      dispatch({ type: "INCREMENT" });
    }

    if (target.name === "decrement") {
      dispatch({ type: "DECREMENT" });
    }

    if (target.name === "reset") {
      dispatch({ type: "RESET" });
    }
  };

  return (
    <Stack gap={3}>
      <Typography variant="h5" textAlign="center">
        Count: {state.count}
      </Typography>
      <Stack direction="row" justifyContent="space-evenly">
        <Button variant="contained" name="increment" onClick={handleOnClick}>
          Increment
        </Button>
        <Button variant="contained" name="decrement" onClick={handleOnClick}>
          Decrement
        </Button>
        <Button variant="contained" name="reset" onClick={handleOnClick}>
          Reset
        </Button>
      </Stack>
    </Stack>
  );
};
    `}
  />
);
