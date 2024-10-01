import ResetPasswordForm from '@/ui/auth/ResetPasswordForm';
import { notFound } from 'next/navigation';

// Constant
import { RESET_PASSWORD } from '@/constants/metadata';

export const metadata = RESET_PASSWORD;

interface ResetPasswordProps {
  searchParams: { code: string };
}

const ResetPassword = ({ searchParams: { code } }: ResetPasswordProps) => {
  if (!code) return notFound();

  return <ResetPasswordForm code={code} />;
};

export default ResetPassword;
