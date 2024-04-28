import { PageInfo } from "../../components/PageInfo";
import { Login } from "./solved";

export const FormSubmissionSolution = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<Login />} />
);
