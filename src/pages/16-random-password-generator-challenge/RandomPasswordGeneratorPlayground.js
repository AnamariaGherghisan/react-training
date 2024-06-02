import { PageInfo } from "../../components/PageInfo";
import { RandomPasswordGenerator } from "./challenge";

export const RandomPasswordGeneratorPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<RandomPasswordGenerator />}
    isChallenge
  />
);
