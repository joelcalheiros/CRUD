import { FC } from "react";
import style from "../App.module.scss";

const Loading: FC = () => (
  <div className={style.loading} data-testid="loading">
    <img className={style.spinner} src="./spinner.svg" alt="loading" />
  </div>
);

export default Loading;
