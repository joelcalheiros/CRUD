import { useEffect } from "react";
import { fetchList } from "./store/listSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Card from "./components/Card";
import AddCard from "./components/AddCard";
import Loading from "./components/Loading";
import iList from "./interfafes/list";
import API_URL from "./constants";
import style from "./App.module.scss";

const App = () => {
  const dispatch = useAppDispatch();

  const list = useAppSelector((state) => state.list.items);

  useEffect(() => {
    dispatch(fetchList(API_URL));
  }, [dispatch]);

  if (list.length === 0) return <Loading />;

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
