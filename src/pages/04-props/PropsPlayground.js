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
          firstLine: "123",
          secondLine: "4th street",
          city: "Manchester",
          postcode: "MAN 123",
        }}
      />
    }
  />
);
