import classNames from "classnames";

export const Control = ({ mode, handleClick }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="btn-group" role="group">
        <button
          type="button"
          className={classNames("btn", "btn-light", {
            active: mode === "button",
          })}
          name="button"
          onClick={handleClick}
        >
          Use Buttons
        </button>
        <button
          type="button"
          className={classNames("btn", "btn-light", {
            active: mode === "select",
          })}
          name="select"
          onClick={handleClick}
        >
          Use Select
        </button>
      </div>
    </div>
  );
};
