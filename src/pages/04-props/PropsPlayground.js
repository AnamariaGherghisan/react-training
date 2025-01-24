import { PageInfo } from "../../components/PageInfo";
import { UserCard } from "./challenge";

export const PropsPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Apple"
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
