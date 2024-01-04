import React, { ButtonHTMLAttributes } from "react";
import { RowButtonStyled } from "./RowButton.style";

interface IRowButton {
  leftRowText: string;
  text: string | number;
  rightRowText: string;
  leftRowProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  rightRowProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const RowButton: React.FC<IRowButton> = ({
  leftRowText,
  leftRowProps,
  rightRowText,
  rightRowProps,
  text,
}) => {
  return (
    <RowButtonStyled>
      <button {...leftRowProps}>{leftRowText}</button>
      <span>{text}</span>
      <button {...rightRowProps}>{rightRowText}</button>
    </RowButtonStyled>
  );
};
