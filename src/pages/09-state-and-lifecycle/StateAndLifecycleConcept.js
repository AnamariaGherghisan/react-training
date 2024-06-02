import { PageInfo } from "../../components/PageInfo";
import file from "./concept.md";

export const StateAndLifecycleConcept = ({ title, pathPrefix }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} />
);
