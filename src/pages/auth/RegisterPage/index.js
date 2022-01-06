import React from 'react'
import { AuthLayouts } from '../../../components/AuthLayouts';
import { Register } from '../../../components/Register';

export const RegisterPage = () => {
    return (
      <AuthLayouts>
          <Register />
      </AuthLayouts>
    );
};
