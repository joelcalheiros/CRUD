import { useState } from "react";
import { editItem } from "../store/listSlice";
import { useAppDispatch } from "../hooks/hooks";
import style from "./Modal.module.scss";
import Button from "./Button";
import iModal from "../interfafes/modal";

const EditModal = ({ id, name, toggleShow }: iModal) => {
  // const { id, name, setShowEditModal } = props;
  const [value, setValue] = useState<string>(name);
  const dispatch = useAppDispatch();

  const handleConfirmRemove = () => {
    dispatch(editItem({ id, value }));
    toggleShow(false);
  };

  return (
    <div className={style.modal}>
      <div className={style.body}>
        <h2>Change name</h2>
        <input
          type="text"
          value={value}
          className={style.input}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={style.buttons}>
          <Button
            text="Cancel"
            handleClickBtn={() => toggleShow(false)}
            cssClass={style.btnCancel}
          />
          <Button
            text="Save"
            handleClickBtn={handleConfirmRemove}
            cssClass={style.btnConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
