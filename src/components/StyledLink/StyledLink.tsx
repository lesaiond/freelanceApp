import { ReactNode } from 'react';
import { StyledLinkWrapper } from "./StyledLink.style";

interface StyledLinkProps {
  children: ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ children }) => {
  return <StyledLinkWrapper>{children}</StyledLinkWrapper>;
};

export default StyledLink;
