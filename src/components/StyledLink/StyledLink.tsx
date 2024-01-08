import { ReactNode } from 'react';
import { StyledLinkWrapper } from "./StyledLink.style";

interface StyledLinkProps {
  children: ReactNode;
  className?: string | null;
}

const StyledLink: React.FC<StyledLinkProps> = ({ children }) => {
  return <StyledLinkWrapper className='secondPrimeColor' >{children}</StyledLinkWrapper>;
};

export default StyledLink;
