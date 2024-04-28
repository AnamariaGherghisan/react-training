import { AppProvider } from "./context/AppProvider";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { Profiles } from "./components/Profiles";

export const App = () => {
  return (
    <AppProvider>
      <NavigationBar />
      <Jumbotron />
      <Profiles />
    </AppProvider>
  );
};
