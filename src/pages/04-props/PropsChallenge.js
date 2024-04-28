import { PageInfo } from "../../components/PageInfo";
import file from "./challenge.md";

export const PropsChallenge = ({ pathPrefix, title }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} />
);
