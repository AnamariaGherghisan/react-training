import { PageInfo } from "../../components/PageInfo";
import file from "./concept.md";

export const ComponentConcept = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} />
);
