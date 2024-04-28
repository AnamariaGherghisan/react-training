import { PageInfo } from "../../components/PageInfo";

const CarCard = () => {
  const vehicle = "Tesla";

  const getPrice = () => {
    return 30 - (30 * 15) / 100;
  };

  const isGenius = true;

  return (
    <div>
      <h1>Vehicle: {vehicle}</h1>
      <h2>Discounted Price: {getPrice()}</h2>
      <h3>{isGenius ? "GENIUS" : "NON-GENIUS"}</h3>
    </div>
  );
};

export const JSXExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<CarCard />}
    showPreviewButton
    code={`const CarCard = () => {
  const vehicle = "Tesla";

  const getPrice = () => {
    return 30 - (30 * 15) / 100;
  };

  const isGenius = true;

  return (
    <div>
      <h1>Vehicle: {vehicle}</h1>
      <h2>Discounted Price: €{getPrice()}</h2>
      <h3>{isGenius ? "GENIUS" : "NON-GENIUS"}</h3>
    </div>
  );
};
    `}
  />
);
