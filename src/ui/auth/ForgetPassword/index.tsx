'use client';

import { useState, useTransition } from 'react';

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

  const [isPending, startTransition] = useTransition();

  const handleSendEmailConfirm = (email: string) => {
    startTransition(async () => {
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
    });
  };

  const handleResent = () => {
    handleSendEmailConfirm(email);
  };

  const renderContent = () => {
    switch (true) {
      case !email:
        return (
          <ConfirmEmailForm
            onSendEmailConfirm={handleSendEmailConfirm}
            isLoading={isPending}
          />
        );
      default:
        return (
          <ResendEmailConfirm
            email={email}
            onResent={handleResent}
            isLoading={isPending}
          />
        );
    }
  };

  return (
    <div className="w-full sm:w-96 relative">
      {renderContent()}
      {isPending && <div className="absolute inset-0" />}
    </div>
  );
};

export default ForgetPasswordForm;
