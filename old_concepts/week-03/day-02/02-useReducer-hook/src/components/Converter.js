import { useReducer } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

import { converterReducer } from "../reducers/converterReducer";
import {
  setValue,
  mmToCm,
  cmToM,
  mToKm,
  MM_CM,
  CM_M,
  M_KM,
} from "../actions/converterActions";

export const Converter = () => {
  const [state, dispatch] = useReducer(converterReducer, {
    value: 0,
    result: 0,
    operation: undefined,
  });

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: 5,
          margin: 5,
          border: "1px solid black",
        }}
      >
        <TextField
          fullWidth
          sx={{ my: 2 }}
          type="number"
          label="Enter your number"
          onChange={({ target }) => {
            dispatch(setValue(target.value));
          }}
        />
        <ButtonGroup>
          <Button
            sx={{ textTransform: "lowercase" }}
            onClick={() => {
              dispatch(mmToCm());
            }}
            variant={state.operation === MM_CM ? "contained" : "outlined"}
          >
            mm - cm
          </Button>
          <Button
            sx={{ textTransform: "lowercase" }}
            onClick={() => {
              dispatch(cmToM());
            }}
            variant={state.operation === CM_M ? "contained" : "outlined"}
          >
            cm - m
          </Button>
          <Button
            sx={{ textTransform: "lowercase" }}
            onClick={() => {
              dispatch(mToKm());
            }}
            variant={state.operation === M_KM ? "contained" : "outlined"}
          >
            m - km
          </Button>
        </ButtonGroup>
      </Box>
      {state.result ? (
        <Box
          sx={{
            textAlign: "center",
            padding: 5,
            margin: 5,
            border: "1px solid black",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Result: {state.result}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
