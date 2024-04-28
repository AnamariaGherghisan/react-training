import { useApp } from "../context/AppProvider";

const profiles = ["Alice Smith", "Carol Smith", "Dave Smith"];

export const Profiles = () => {
  const { setProfileName } = useApp();

  return (
    <div className="container text-center">
      <div className="btn-group" role="group">
        {profiles.map((profile) => {
          return (
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                setProfileName(profile);
              }}
            >
              {profile}
            </button>
          );
        })}
      </div>
    </div>
  );
};
