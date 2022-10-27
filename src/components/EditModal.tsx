import { useState } from "react";
import { editItem } from "../store/listSlice";
import { useAppDispatch } from "../hooks/hooks";
import style from "./Modal.module.scss";

const EditModal = (props: any) => {
  const { id, name, setShowEditModal } = props;
  const [value, setValue] = useState<string>(name);
  const dispatch = useAppDispatch();

  const handleConfirmRemove = () => {
    dispatch(editItem({ id, value }));
    setShowEditModal(false);
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
          <button
            type="button"
            className={style.btnCancel}
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className={style.btnConfirm}
            onClick={handleConfirmRemove}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
