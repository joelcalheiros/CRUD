import { FC } from "react";

interface ButtonProps {
  handleClickBtn(): void;
  text: string;
  cssClass: string;
  title?: string;
  dataTestid?: string;
}

const Button: FC<ButtonProps> = ({
  handleClickBtn,
  text,
  cssClass,
  title,
  dataTestid,
}: ButtonProps) => (
  <button
    type="button"
    className={cssClass}
    onClick={handleClickBtn}
    title={title}
    data-testid={dataTestid}
  >
    {text}
  </button>
);

export default Button;
