import { PageInfo } from "../../components/PageInfo";
import file from "./challenge.md";

export const ClassBasedComponentChallenge = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} />
);
