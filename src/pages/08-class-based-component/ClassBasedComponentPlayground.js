import { PageInfo } from "../../components/PageInfo";
import { ClassBasedComponent } from "./challenge";

export const ClassBasedComponentPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<ClassBasedComponent />}
  />
);
