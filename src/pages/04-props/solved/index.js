import "./index.css";

export const UserCard = ({ firstName, lastName, companyName, address }) => {
  const formatAddress = ({ houseNumber, street, city, postcode }) => {
    if (street) {
      return `${houseNumber}, ${street}, ${city}, ${postcode}`;
    }

    return `${houseNumber}, ${city}, ${postcode}`;
  };

  return (
    <div data-testid="user-card" className="user-card">
      <div data-testid="full-name" className="font-display-1">
        {firstName} {lastName}
      </div>
      <div data-testid="company-name" className="font-display-2">
        {companyName}
      </div>
      <div data-testid="full-address" className="font-display-3">
        {formatAddress(address)}
      </div>
    </div>
  );
};
