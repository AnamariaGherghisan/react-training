import { PageInfo } from "../../components/PageInfo";
import file from "./challenge.md";

export const TakeHomeSalaryChallenge = ({ pathPrefix, title }) => (
  <PageInfo title={title} pathPrefix={pathPrefix} file={file} isChallenge />
);
