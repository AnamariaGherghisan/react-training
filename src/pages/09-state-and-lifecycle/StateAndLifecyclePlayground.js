import { PageInfo } from "../../components/PageInfo";
import { RandomQuote } from "./challenge";

export const StateAndLifecyclePlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<RandomQuote />}
  />
);
