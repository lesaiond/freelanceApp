import React, { ReactNode } from "react";
import { BoxShadowStyled } from "./BoxShadow.style";

interface IBoxShadowProps {
  children: ReactNode;
}

export const BoxShadow: React.FC<IBoxShadowProps> = ({ children }) => {
  return <BoxShadowStyled>{children}</BoxShadowStyled>;
};
