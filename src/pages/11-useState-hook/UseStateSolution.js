import { PageInfo } from "../../components/PageInfo";
import { Counter } from "./solved";

export const UseStateSolution = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<Counter />} />
);
