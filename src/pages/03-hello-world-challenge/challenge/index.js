import "./index.css";

export const HelloWorld = () => {
  return (
    <div data-testid="hello-world" className="hello-world-container">
      <div className="img-item">
        <img
          className="image"
          data-testid="profile-img"
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="desktop computer on a table with a coffee mug"
        />
      </div>
      <div className="content-item">
        <h1 data-testid="full-name">Introduction to React</h1>
        <p data-testid="bio">This is the first component built using React.</p>
      </div>
    </div>
  );
};
