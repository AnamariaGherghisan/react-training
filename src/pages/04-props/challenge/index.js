import "./index.css";

export const UserCard = (props) => {
  const formatAddress = (address) => {
    if (!address.street) {
      return `${address.houseNumber}, ${address.city}, ${address.postcode}.`;
    } else {
      return `${address.houseNumber}, ${address.street}, ${address.city}, ${address.postcode}.`;
    }
  };
  return (
    <div data-testid="user-card" className="user-name">
      <h1 data-testid="full-name" className="full-name">
        {props.firstName} {props.lastName}
      </h1>
      <h3 data-testid="company-name">{props.companyName}</h3>
      <h6 data-testid="address">{formatAddress(props.address)}</h6>
    </div>
  );
};
