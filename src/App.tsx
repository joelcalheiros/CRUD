import { useEffect, useState } from "react";
import { fetchList } from "./store/listSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import AddCard from "./components/AddCard";
import Card from "./components/Card";
import Loading from "./components/Loading";
import iList from "./interfafes/list";
import style from "./App.module.scss";
import API_URL from "./constants";

const App = () => {
  const dispatch = useAppDispatch();

  const list = useAppSelector((state) => state.list.items);
  const [showLoading, setShowLoading] = useState<boolean>(list.length === 0);

  useEffect(() => {
    dispatch(fetchList(API_URL));
  }, [dispatch]);

  useEffect(() => {
    if (list.length > 0) setShowLoading(false);
  }, [list]);

  return (
    <section className={style.App} data-testid="list">
      <div className={style.list}>
        <AddCard />
        {showLoading ? (
          <Loading />
        ) : (
          <>
            {list.map((item: iList) => (
              <Card key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default App;
