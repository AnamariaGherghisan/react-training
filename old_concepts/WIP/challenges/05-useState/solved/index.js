import "./index.css";
import { useState } from "react";

export const CounterImage = () => {
  const [counter, setCounter] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setCounter((counter) => counter + 1);

    counter + 1 > 0 && (counter + 1) % 5 === 0
      ? setShowImage(true)
      : setShowImage(false);
  };

  return (
    <div data-testid="counter-image">
      <div data-testid="title" className="title">
        What do I see every 5 clicks?
      </div>
      <div data-testid="click-counter" className="click-counter">
        Button clicks: {counter}
      </div>
      <div>
        <button
          data-testid="counter-btn"
          className="counter-btn"
          onClick={handleClick}
        >
          Random Image Clicker
        </button>
      </div>
      <div>
        {showImage ? (
          <div className="image-container">
            <img
              data-testid="random-image"
              src="https://picsum.photos/300"
              alt="random"
            />
          </div>
        ) : (
          <div data-testid="no-image" className="no-image">
            Your random image will appear here.
          </div>
        )}
      </div>
    </div>
  );
};
