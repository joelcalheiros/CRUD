import { FC } from "react";
import { deleteItem } from "../store/listSlice";
import { useAppDispatch } from "../hooks/hooks";
import Button from "./Button";
import style from "./Modal.module.scss";
import iModal from "../interfafes/modal";

const ConfirmRemoveModal: FC<iModal> = ({ id, name, toggleShow }: iModal) => {
  const dispatch = useAppDispatch();

  const handleConfirmRemove = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div className={style.modal}>
      <div className={style.body}>
        <h2>{`Are you sure do you want to remove "${name}"?`}</h2>
        <div className={style.buttons}>
          <Button
            text="Cancel"
            handleClickBtn={() => toggleShow(false)}
            cssClass={style.btnCancel}
          />
          <Button
            text="Yes, remove"
            handleClickBtn={handleConfirmRemove}
            cssClass={style.btnConfirmRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmRemoveModal;
