import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import style from "./App.module.scss";
import { fetchList } from "./store/listSlice";
import iList from "./interfafes/list";
import Card from "./components/Card";
import API_URL from "./constants";
import AddCard from "./components/AddCard";

const App = () => {
  const dispatch = useAppDispatch();

  const list = useAppSelector((state) => state.list.items);

  useEffect(() => {
    dispatch(fetchList(API_URL));
  }, [dispatch]);

  if (list.length === 0)
    return (
      <div className={style.loading} data-testid="loading">
        <img className={style.spinner} src="./spinner.svg" alt="loading" />
      </div>
    );

  return (
    <section className={style.App} data-testid="list">
      <div className={style.list}>
        <AddCard />
        {list.map((item: iList) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default App;
