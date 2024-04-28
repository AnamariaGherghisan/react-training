import { PageInfo } from "../../components/PageInfo";
import { Login } from "./challenge";

export const FormSubmissionPlayground = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} playground={<Login />} />
);
