import { v4 as uuidv4 } from "uuid";

export const Words = ({ words }) => {
  if (words.length === 0) {
    return (
      <div className="alert alert-primary" role="alert">
        No results!!
      </div>
    );
  }

  return (
    <ul className="list-group">
      {words.map((word) => (
        <li className="list-group-item" key={uuidv4()}>
          {word}
        </li>
      ))}
    </ul>
  );
};
