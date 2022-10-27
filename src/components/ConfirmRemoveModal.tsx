import { deleteItem } from "../store/listSlice";
import { useAppDispatch } from "../hooks/hooks";
import style from "./Modal.module.scss";

const ConfirmRemoveModal = (props: any) => {
  const { id, name, setShowRemoveModal } = props;
  const dispatch = useAppDispatch();

  const handleConfirmRemove = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div className={style.modal}>
      <div className={style.body}>
        <h2>Are you sure do you want to remove "{name}"?</h2>
        <div className={style.buttons}>
          <button
            type="button"
            className={style.btnCancel}
            onClick={() => setShowRemoveModal(false)}
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

export default ConfirmRemoveModal;
