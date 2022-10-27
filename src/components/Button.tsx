import { FC } from "react";

interface ButtonProps {
  handleClickBtn(): void;
  text: string;
  cssClass: string;
}

const Button: FC<ButtonProps> = ({
  handleClickBtn,
  text,
  cssClass,
}: ButtonProps) => (
  <button type="button" className={cssClass} onClick={handleClickBtn}>
    {text}
  </button>
);

export default Button;
