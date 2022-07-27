import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormInput from '../../components/FormInput/FormInput';
import Header from '../../components/Header/Header';
import {
  ButtonCenter,
  RememberContainer,
  SignupFooter,
  TermsContainer,
} from './Signin.styles';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { SignInAuthUserWithEmailAndPassword } from '../../firebase/firebase';
import { async } from '@firebase/util';

const Signin = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    setUserDetails({
      email: email.value,
      password: password.value,
    });
    try {
      if (!userDetails.email || !userDetails.password) return;
      const res = await SignInAuthUserWithEmailAndPassword(
        userDetails.email,
        userDetails.password
      );
      console.log(res);
    } catch (error) {
      alert(`We could not sign you in ${error}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Header />
      <FormInput
        placeholder="Your Email"
        type="email"
        required
        id="email"
      />
      <FormInput
        placeholder="Password"
        type="password"
        required
        id="password"
      />
      <RememberContainer>
        <div>
          <input type="checkbox" />
          <pre>Remember Me</pre>
        </div>
        <Link to={'/forgot-paswd'}>Forgot Password?</Link>
      </RememberContainer>
      <ButtonCenter>
        <Button
          bgcolor="rgba(19, 34, 72, 1)"
          width="19rem"
          color="#fff"
          title="Sign In"
        />
      </ButtonCenter>
      <TermsContainer>
        By continuing, you agree to the Terms & conditions
      </TermsContainer>
      <SignupFooter>
        Don’t have an account? &nbsp;
        <Link to={'/sign-up'}>Sign Up here</Link>
      </SignupFooter>
    </form>
  );
};

export default Signin;
