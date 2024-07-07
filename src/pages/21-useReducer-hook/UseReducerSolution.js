import { PageInfo } from "../../components/PageInfo";
import { App } from "./solved";

export const UseReducerSolution = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<App />} />
);
