import { PageInfo } from "../../components/PageInfo";
import { ProductCard } from "./solved";

export const ComponentSolution = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<ProductCard />}
  />
);
