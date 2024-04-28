import { useEffect, useState } from "react";

import { Jumbotron } from "./components/Jumbotron";
import { Repos } from "./components/Repos";

export const App = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://api.github.com/orgs/bookingcom/repos";

      const response = await fetch(URL);

      const data = await response.json();

      setRepos(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Jumbotron />

      {repos && <Repos repos={repos} />}
    </div>
  );
};
