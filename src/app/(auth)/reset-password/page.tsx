import ResetPasswordForm from '@/ui/auth/ResetPasswordForm';
import { notFound } from 'next/navigation';

interface ResetPasswordProps {
  searchParams: { code: string };
}

const ResetPassword = ({ searchParams: { code } }: ResetPasswordProps) => {
  if (!code) return notFound();

  return <ResetPasswordForm code={code} />;
};

export default ResetPassword;
