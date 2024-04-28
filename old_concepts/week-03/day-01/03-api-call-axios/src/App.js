import { useEffect, useState } from "react";
import axios from "axios";

import { Jumbotron } from "./components/Jumbotron";
import { Repos } from "./components/Repos";

export const App = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://api.github.com/orgs/bookingcom/repos";

      const { data } = await axios.get(URL);

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
