import { getRedirectResult } from 'firebase/auth';
import React, { useEffect } from 'react';

import {
  auth,
  // signInWithGoogleRedirect,
  createUserDocFromAuth
} from '../../utils/firebase/firebase.utils';

import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';

import './Authentication.scss';

const Authentication = () => {
  useEffect(() => {
    async function logGoogleRedirectUser() {
      const response = await getRedirectResult(auth);

      if (response) {
        const { user } = response;
        await createUserDocFromAuth(user);
      }
    }
    logGoogleRedirectUser();
  }, []);

  return (
    <div className="authentication__container">
      <Signin />
      <Signup />
    </div>
  );
};

export default Authentication;
