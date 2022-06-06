import React, { useState } from 'react';

import {
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocFromAuth,
  signInAuthUserFromEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './Signin.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

const Signin = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('No such user exist');
          break;
        default:
          alert(error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signin__container">
      <h2>Already have an account?</h2>
      <span>Signin with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          required
          type="email"
          onChange={handleInputChange}
          name="email"
          value={email}
        />

        <Input
          label={'Password'}
          required
          type="password"
          onChange={handleInputChange}
          name="password"
          value={password}
        />
        <div className="buttons__container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={'google'}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
