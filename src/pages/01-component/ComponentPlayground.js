import { PageInfo } from "../../components/PageInfo";
import { ProductCard } from "./challenge";

export const ComponentPlayground = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<ProductCard />}
  />
);
