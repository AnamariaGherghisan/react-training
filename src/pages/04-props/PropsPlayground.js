import { PageInfo } from "../../components/PageInfo";
import { UserCard } from "./challenge";

export const PropsPlayground = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<UserCard />} />
);
