'use client';

import { useState } from 'react';

// Components
import ConfirmEmailForm from './ConfirmEmailForm';
import ResendEmailConfirm from './ResendEmailConfirm';

// Actions
import { handleForgetPassword } from '@/actions/auth';

// Contexts
import useToast from '@/contexts/toast';

// Constants
import { MESSAGES } from '@/constants';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSendEmailConfirm = async (email: string) => {
    const { data } = await handleForgetPassword(email);

    const { ERROR, SUCCESS } = MESSAGES.FORGET_PASSWORD;

    const isSuccess = !!data?.ok;

    const { TITLE, DESCRIPTION } = isSuccess ? SUCCESS : ERROR;

    showToast({
      type: isSuccess ? 'success' : 'error',
      title: TITLE,
      message: DESCRIPTION,
    });

    isSuccess && setEmail(email);
  };

  const handleResent = async () => {
    await handleSendEmailConfirm(email);
  };

  const renderContent = () => {
    switch (true) {
      case !email:
        return <ConfirmEmailForm onSendEmailConfirm={handleSendEmailConfirm} />;
      default:
        return <ResendEmailConfirm email={email} onResent={handleResent} />;
    }
  };

  return <div className="w-full sm:w-96">{renderContent()}</div>;
};

export default ForgetPasswordForm;
