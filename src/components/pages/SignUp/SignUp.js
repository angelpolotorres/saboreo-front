import { SignUpForm } from './SignUpForm';
import { Container, Zone } from '../../common/Structure/index';
import './SignUp.css';

export const SignUp = () => {
  return (
    <Container>
      <Zone className="signup-zone">
        <div className="signup-image"></div>
        <SignUpForm className="signupForm" />
      </Zone>
    </Container>
  );
};
