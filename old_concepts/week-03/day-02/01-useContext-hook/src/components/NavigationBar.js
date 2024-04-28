import { useApp } from "../context/AppProvider";

export const NavigationBar = () => {
  const { profileName } = useApp();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a class="navbar-brand" href="#home">
          {profileName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#link1">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link2">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link3">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
