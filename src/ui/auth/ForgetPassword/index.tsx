'use client';

import { useState } from 'react';

// Components
import ConfirmEmailForm from './ConfirmEmailForm';
import ResendEmailConfirm from './ResendEmailConfirm';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSendEmailConfirm = async (email: string) => {
    setEmail(email);
  };

  const renderContent = () => {
    switch (true) {
      case !email:
        return <ConfirmEmailForm onSendEmailConfirm={handleSendEmailConfirm} />;
      default:
        return <ResendEmailConfirm email={email} />;
    }
  };

  return <div className="w-full sm:w-96">{renderContent()}</div>;
};

export default ForgetPasswordForm;
