import { Component } from "react";
import "./index.css";

export class UserCard extends Component {
  formatAddress({ houseNumber, street, city, postcode }) {
    if (street) {
      return `${houseNumber}, ${street}, ${city}, ${postcode}`;
    }

    return `${houseNumber}, ${city}, ${postcode}`;
  }

  render() {
    return (
      <div data-testid="user-card" className="user-card">
        <div data-testid="full-name" className="font-display-1">
          {this.props.firstName} {this.props.lastName}
        </div>
        <div data-testid="company-name" className="font-display-2">
          {this.props.companyName}
        </div>
        <div data-testid="full-address" className="font-display-3">
          {this.formatAddress(this.props.address)}
        </div>
      </div>
    );
  }
}
