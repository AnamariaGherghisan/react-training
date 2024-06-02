import { PageInfo } from "../../components/PageInfo";
import { TakeHomeCalculator } from "./challenge";

export const TakeHomeSalaryPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<TakeHomeCalculator />}
    isChallenge
  />
);
