import { PageInfo } from "../../components/PageInfo";
import { Portfolio } from "./challenge";

export const PortfolioPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<Portfolio />}
    isChallenge
  />
);
