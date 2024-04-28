import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useApp } from "./AppProvider";

export const Item = ({ item }) => {
  const { basket, addToBasket, removeFromBasket } = useApp();

  const itemInBasket = basket.find((basketItem) => basketItem.id === item.id);

  return (
    <ListItem disablePadding data-testid="item">
      {itemInBasket ? (
        <ListItemIcon>
          <IconButton
            data-testid="remove-btn"
            onClick={() => {
              removeFromBasket(item);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemIcon>
      ) : (
        <ListItemIcon>
          <IconButton
            data-testid="add-btn"
            onClick={() => {
              addToBasket(item);
            }}
          >
            <AddIcon />
          </IconButton>
        </ListItemIcon>
      )}
      <ListItemText data-testid="item-label" primary={item.label} />
    </ListItem>
  );
};
