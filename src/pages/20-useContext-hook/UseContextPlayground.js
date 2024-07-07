import { PageInfo } from "../../components/PageInfo";
import { App } from "./challenge";

export const UseContextPlayground = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<App />} />
);
