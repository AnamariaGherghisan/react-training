import { PageInfo } from "../../components/PageInfo";
import file from "./challenge.md";

export const FormSubmissionChallenge = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} />
);
