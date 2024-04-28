import { Buttons } from "../components/Buttons";
import { Repos } from "../components/Repos";
import { Error } from "../components/Error";
import { useRepos } from "../hooks/useRepos";

export const ReposButton = ({ organisations }) => {
  const { repos, error, setSelectedOrg } = useRepos();

  const handleClick = ({ currentTarget }) => {
    setSelectedOrg(currentTarget.name);
  };

  return (
    <div className="container">
      <Buttons organisations={organisations} handleClick={handleClick} />

      {error && <Error />}

      {repos && <Repos repos={repos} />}
    </div>
  );
};
