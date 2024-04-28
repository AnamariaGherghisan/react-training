import { PageInfo } from "../../components/PageInfo";
import { UserCard } from "./solved";

export const PropsSolution = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Booking.com"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    }
  />
);
