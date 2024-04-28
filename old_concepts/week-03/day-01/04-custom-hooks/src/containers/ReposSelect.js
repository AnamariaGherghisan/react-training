import { Select } from "../components/Select";
import { Repos } from "../components/Repos";
import { Error } from "../components/Error";
import { useRepos } from "../hooks/useRepos";

export const ReposSelect = ({ organisations }) => {
  const { repos, error, setSelectedOrg } = useRepos();

  const handleChange = ({ currentTarget }) => {
    setSelectedOrg(currentTarget.value);
  };

  return (
    <div className="container">
      <Select organisations={organisations} handleChange={handleChange} />

      {error && <Error />}

      {repos && <Repos repos={repos} />}
    </div>
  );
};
