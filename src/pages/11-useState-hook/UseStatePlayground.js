import { PageInfo } from "../../components/PageInfo";
import { Counter } from "./challenge";

export const UseStatePlayground = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<Counter />} />
);
