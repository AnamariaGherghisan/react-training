import { PageInfo } from "../../components/PageInfo";
import { JSX } from "./challenge";

export const JSXPlayground = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<JSX />} />
);
