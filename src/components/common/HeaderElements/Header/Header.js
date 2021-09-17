import { LogoHeader, MainNav } from '../index';
import { Zone, Container } from '../../Structure/index';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => {
  return (
    <Container header>
      <Zone>
        <HeaderStyled>
          <LogoHeader>Saboreo</LogoHeader>
          <MainNav />
        </HeaderStyled>
      </Zone>
    </Container>
  );
};
