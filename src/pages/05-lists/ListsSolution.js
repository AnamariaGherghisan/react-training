import { PageInfo } from "../../components/PageInfo";
import { Users } from "./solved";

const users = [
  {
    id: "111",
    firstName: "Bob",
    lastName: "Smith",
    companyName: "Booking.com",
    address: {
      houseNumber: "111",
      street: "4th street",
      city: "London",
      postcode: "LON 123",
    },
    isPremium: true,
  },
  {
    id: "222",
    firstName: "Alice",
    lastName: "Smith",
    companyName: "Apple",
    address: {
      houseNumber: "222",
      city: "London",
      postcode: "LON 222",
    },
    isPremium: false,
  },
  {
    id: "333",
    firstName: "Carol",
    lastName: "Smith",
    companyName: "Google",
    address: {
      houseNumber: "333",
      street: "4th street",
      city: "London",
      postcode: "LON 333",
    },
    isPremium: true,
  },
  {
    id: "444",
    firstName: "Dave",
    lastName: "Smith",
    companyName: "Tesla",
    address: {
      houseNumber: "444",
      city: "London",
      postcode: "LON 444",
    },
    isPremium: false,
  },
];

export const ListsSolution = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<Users users={users} />}
  />
);
