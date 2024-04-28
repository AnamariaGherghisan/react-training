import "./userCard.css";

const formatAddress = ({ houseNumber, street, city, postcode }) =>
  street
    ? `${houseNumber}, ${street}, ${city}, ${postcode}`
    : `${houseNumber}, ${city}, ${postcode}`;

export const UserCard = ({ user }) => (
  <div data-testid="user-card" className="user-card">
    <div className="user-title">
      <div data-testid="full-name" className="font-display-1">
        {user.firstName} {user.lastName}
      </div>
      {user.isPremium && (
        <i
          data-testid="premium-icon"
          className="premium-icon fa-solid fa-crown"
        ></i>
      )}
    </div>
    <div data-testid="company-name" className="font-display-2">
      {user.companyName}
    </div>
    <div data-testid="full-address" className="font-display-3">
      {formatAddress(user.address)}
    </div>
  </div>
);
