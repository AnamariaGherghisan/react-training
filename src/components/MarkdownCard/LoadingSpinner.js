import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingSpinner = ({ isLoading }) => {
  return (
    <Backdrop sx={{ color: "#fff" }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
