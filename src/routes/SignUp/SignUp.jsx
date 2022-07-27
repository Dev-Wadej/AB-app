import React, { useContext } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { UserContext } from '../../context/userContext';
import Header from '../../components/Header/Header';
import { RememberContainer } from '../SignIn/Signin.styles';
import Button from '../../components/Button/Button';
import './Signup.scss';
import {
  createUserAuthDb,
  createUserAuthWithEmailAndPassword,
} from '../../firebase/firebase';

const SignUp = () => {
  const { clearFormFields, userCreateDetails, setUserCreateDetails } =
    useContext(UserContext);
  const { username, email, number, password, cfrmPassword } =
    userCreateDetails;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCreateDetails({
      ...userCreateDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cfrmPassword) {
      alert('Your Passwords do not match');
      return;
    }
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserAuthDb(user, { displayName: username });
      clearFormFields('signUp');
    } catch (error) {
      alert('Creation phase encountered an error with ', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Header title={'Sign up to create your AB Luxury account'} />
      <FormInput
        placeholder="Username"
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
      />
      <FormInput
        placeholder="Email"
        type="email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <FormInput
        placeholder="Phone Number (optional)"
        type="number"
        value={number}
        name="number"
        onChange={handleChange}
      />
      <FormInput
        placeholder="Password"
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />
      <FormInput
        placeholder="Confirm Password"
        type="password"
        value={cfrmPassword}
        name="cfrmPassword"
        onChange={handleChange}
      />
      <RememberContainer style={{ marginLeft: '-6rem' }}>
        <div>
          <input type="checkbox" /> &nbsp;&nbsp;&nbsp;
          <pre>I agree to the Terms & conditions</pre>
        </div>
      </RememberContainer>
      <Button
        title="Sign Up"
        color="#fff"
        bgcolor={'rgba(19, 34, 72, 1)'}
        width="20rem"
        type="submit"
      ></Button>
    </form>
  );
};

export default SignUp;
