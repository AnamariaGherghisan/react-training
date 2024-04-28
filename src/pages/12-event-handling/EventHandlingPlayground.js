import { PageInfo } from "../../components/PageInfo";
import { WordCounter } from "./challenge";

export const EventHandlingPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<WordCounter />}
  />
);
