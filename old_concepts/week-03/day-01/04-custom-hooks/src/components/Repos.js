export const Repos = ({ repos }) => {
  if (repos.length === 0) {
    return (
      <div className="alert alert-primary" role="alert">
        No repositories found!!
      </div>
    );
  }

  return (
    <ul className="list-group">
      {repos.map((repo) => (
        <li className="list-group-item" key={repo.id}>
          <a
            href={repo.html_url}
            className="link-primary"
            target="_blank"
            rel="noreferrer"
          >
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
