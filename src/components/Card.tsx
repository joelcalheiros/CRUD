import { FC, useState } from "react";
import iList from "../interfafes/list";
import Button from "./Button";
import style from "./Card.module.scss";
import ConfirmRemoveModal from "./ConfirmRemoveModal";
import EditModal from "./EditModal";

const Card: FC<iList> = ({ id, thumbnail, name }: iList): JSX.Element => {
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleClickRemove = () => {
    setShowRemoveModal(true);
  };

  const handleClickEdit = () => {
    setShowEditModal(true);
  };

  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <>
      <div className={style.card} data-testid="card">
        <div className={style["card-img"]}>
          <img className={style.img} src={imgSrc} alt={name} />
        </div>
        <div className={style.title}>{name}</div>
        <div className={style.buttons}>
          <Button
            text="Edit name"
            handleClickBtn={handleClickEdit}
            cssClass={style.btn}
          />
          <Button
            text="Remove"
            handleClickBtn={handleClickRemove}
            cssClass={style.btn}
          />
        </div>
      </div>
      {showRemoveModal && (
        <ConfirmRemoveModal
          id={id}
          name={name}
          toggleShow={setShowRemoveModal}
        />
      )}
      {showEditModal && (
        <EditModal id={id} name={name} toggleShow={setShowEditModal} />
      )}
    </>
  );
};

export default Card;
