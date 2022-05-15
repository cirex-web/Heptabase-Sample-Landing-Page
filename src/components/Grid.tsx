import css from "../styles/grid.module.css";
import { ReactChildren } from "../util/interface";
const Grid = ({ children }: ReactChildren) => {
  return <div className={css.grid}>{children}</div>;
};

export default Grid;
