export const SET_VALUE = "SET_VALUE";
export const MM_CM = "MM_CM";
export const CM_M = "CM_M";
export const M_KM = "M_KM";

export const setValue = (payload) => {
  return { type: SET_VALUE, payload };
};

export const mmToCm = () => {
  return { type: MM_CM };
};

export const cmToM = () => {
  return { type: CM_M };
};

export const mToKm = () => {
  return { type: M_KM };
};
