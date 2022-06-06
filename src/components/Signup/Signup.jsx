import React, { useState } from 'react';
import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth
} from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';
import Input from '../Input/Input';

import './Signup.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert(
            'Sorry! Can not create this user as email id is already in use'
          );
          break;
        case 'auth/weak-password':
          alert('Please provide atleast 6 character password');
          break;
        default:
          alert(error);
      }
    }
  };

  return (
    <div className="signup__container">
      <h2>Don&apos;t have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label={'Display Name'}
          required
          type="text"
          onChange={handleInputChange}
          name="displayName"
          value={displayName}
        />

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

        <Input
          label={'Confirm Password'}
          required
          type="password"
          onChange={handleInputChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type={'submit'} buttonType={''}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
