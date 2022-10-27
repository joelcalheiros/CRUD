import style from "../App.module.scss";

const Loading = () => (
  <div className={style.loading} data-testid="loading">
    <img className={style.spinner} src="./spinner.svg" alt="loading" />
  </div>
);

export default Loading;
