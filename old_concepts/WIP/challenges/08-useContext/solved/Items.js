import List from "@mui/material/List";
import { Item } from "./Item";

export const Items = ({ items }) => {
  return (
    <List data-testid="items">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </List>
  );
};
