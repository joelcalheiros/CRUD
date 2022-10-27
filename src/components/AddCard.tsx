import { addItem } from "../store/listSlice";
import { useAppDispatch } from "../hooks/hooks";
import style from "./AddCard.module.scss";

const AddCard = () => {
  const dispatch = useAppDispatch();
  const addNewCard = () => {
    dispatch(addItem());
  };

  return (
    <div className={style.addCard}>
      <button
        className={style.btn}
        onClick={addNewCard}
        title="Add character"
        data-testid="addCard"
      >
        +
      </button>
    </div>
  );
};

export default AddCard;
