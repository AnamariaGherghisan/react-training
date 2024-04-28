import { PageInfo } from "../../components/PageInfo";
import { GitHubDirectory } from "./challenge";

export const GitHubDirectoryPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<GitHubDirectory />}
    isChallenge
  />
);
