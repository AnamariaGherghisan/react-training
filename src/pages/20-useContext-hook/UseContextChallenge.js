import { PageInfo } from "../../components/PageInfo";
import file from "./challenge.md";

export const UseContextChallenge = ({ pathPrefix, title }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} />
);
