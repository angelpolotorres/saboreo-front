import { LogInForm } from './LogInForm';
import { Container, Zone } from '../../common/Structure/index';
import './LogIn.css';

export const LogIn = () => {
  return (
    <Container>
      <Zone className="login-zone">
        <div className="login-image"></div>
        <LogInForm className="loginForm" />
      </Zone>
    </Container>
  );
};
