import { PageInfo } from "../../components/PageInfo";
import { WordCounter } from "./solved";

export const EventHandlingSolution = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<WordCounter />}
  />
);
