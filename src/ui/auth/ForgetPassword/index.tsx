'use client';

import { useState } from 'react';

// Components
import ConfirmEmailForm from './ConfirmEmailForm';
import ResendEmailConfirm from './ResendEmailConfirm';

const ForgetPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSendEmailConfirm = async (email: string) => {
    setStep(2);
    setEmail(email);
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <ConfirmEmailForm onSendEmailConfirm={handleSendEmailConfirm} />;
      default:
        return <ResendEmailConfirm email={email} />;
    }
  };

  return <div className="w-full sm:w-96">{renderContent()}</div>;
};

export default ForgetPasswordForm;
