import { addItem } from "../store/listSlice";
import { useAppDispatch } from "../hooks/hooks";
import style from "./AddCard.module.scss";
import { FC } from "react";
import Button from "./Button";

const AddCard: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const addNewCard = () => {
    dispatch(addItem());
  };

  return (
    <div className={style.addCard}>
      <Button
        cssClass={style.btn}
        handleClickBtn={addNewCard}
        title="Add character"
        dataTestid="addCard"
        text="+"
      />
    </div>
  );
};

export default AddCard;
