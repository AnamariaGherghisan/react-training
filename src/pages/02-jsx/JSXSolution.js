import { PageInfo } from "../../components/PageInfo";
import { JSX } from "./solved";

export const JSXSolution = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<JSX />} />
);
