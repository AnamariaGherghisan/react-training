import { AppProvider } from "./AppProvider";
import { mockItems } from "./mockItems";
import { Items } from "./Items";
import { Banner } from "./Banner";

export const Basket = () => {
  return (
    <AppProvider>
      <Banner />
      <Items items={mockItems} />
    </AppProvider>
  );
};
