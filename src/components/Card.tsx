import { useState } from "react";
import iList from "../interfafes/list";
import style from "./Card.module.scss";
import ConfirmRemoveModal from "./ConfirmRemoveModal";
import EditModal from "./EditModal";

const Card = ({ id, thumbnail, name }: iList) => {
  const [showRemoveModal, setShowRemoveModal] = useState<Boolean>(false);
  const [showEditModal, setShowEditModal] = useState<Boolean>(false);

  const handleClickRemove = () => {
    setShowRemoveModal(true);
  };

  const handleClickEdit = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <div className={style.card} data-testid="card">
        <div className={style["card-img"]}>
          <img
            className={style.img}
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
          />
        </div>
        <div className={style.title}>{name}</div>
        <div className={style.buttons}>
          <button type="button" className={style.btn} onClick={handleClickEdit}>
            Edit name
          </button>
          <button
            type="button"
            className={style.btn}
            onClick={handleClickRemove}
          >
            Remove
          </button>
        </div>
      </div>
      {showRemoveModal && (
        <ConfirmRemoveModal
          id={id}
          name={name}
          setShowRemoveModal={setShowRemoveModal}
        />
      )}
      {showEditModal && (
        <EditModal id={id} name={name} setShowEditModal={setShowEditModal} />
      )}
    </>
  );
};

export default Card;
