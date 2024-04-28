import { PageInfo } from "../../components/PageInfo";
import { HelloWorld } from "./challenge";

export const HelloWorldPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<HelloWorld />}
    isChallenge
  />
);
