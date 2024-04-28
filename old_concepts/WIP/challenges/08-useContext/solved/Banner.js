import Alert from "@mui/material/Alert";
import { useApp } from "./AppProvider";

export const Banner = () => {
  const { basket } = useApp();

  return (
    <Alert severity="info" data-testid="banner">
      {basket.length === 0
        ? "You have no items in the basket"
        : `You have ${basket.length} item(s) in the basket`}
    </Alert>
  );
};
