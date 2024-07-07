import { PageInfo } from "../../components/PageInfo";
import { App } from "./challenge";

export const SimpleBasketPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    isChallenge
  />
);
