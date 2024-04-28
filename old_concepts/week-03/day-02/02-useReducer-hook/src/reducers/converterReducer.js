import { SET_VALUE, MM_CM, CM_M, M_KM } from "../actions/converterActions";

export const converterReducer = (state, action) => {
  if (action.type === SET_VALUE) {
    return {
      ...state,
      value: +action.payload,
    };
  }

  if (action.type === MM_CM) {
    const result = state.value * 10;

    return {
      ...state,
      result,
      operation: MM_CM,
    };
  }

  if (action.type === CM_M) {
    const result = state.value * 100;

    return {
      ...state,
      result,
      operation: CM_M,
    };
  }

  if (action.type === M_KM) {
    const result = state.value * 1000;

    return {
      ...state,
      result,
      operation: M_KM,
    };
  }

  return state;
};
