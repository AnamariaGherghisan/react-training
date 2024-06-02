import { PageInfo } from "../../components/PageInfo";
import { ClassBasedCounter } from "./challenge";

export const ClassBasedCounterPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<ClassBasedCounter />}
    isChallenge
  />
);
