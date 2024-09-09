export const MESSAGES = {
  TASK: {
    MIN_LENGTH: 'Title is too short. Please enter at least 6 characters.',
  },
  PASSWORD: {
    REQUIRED: 'Password is required',
    REGEX_MISMATCH:
      'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.',
    MISMATCH: 'Passwords do not match',
  },
  EMAIL: {
    REQUIRED: 'Email is required',
    REGEX_MISMATCH: 'This field is email',
  },
  FORGET_PASSWORD: {
    SUCCESS: {
      TITLE: 'Success',
      DESCRIPTION: 'Password reset link has been sent to your email.',
    },
    ERROR: {
      TITLE: 'Error',
      DESCRIPTION:
        'An error occurred while sending the reset password link. Please try again.',
    },
  },
  RESET_PASSWORD: {
    SUCCESS: {
      TITLE: 'Success',
      DESCRIPTION: 'Password has been reset successfully.',
    },
    ERROR: {
      TITLE: 'Error',
      DESCRIPTION:
        'An error occurred while resetting password. Please try again.',
    },
  },
  SIGN_IN: {
    SUCCESS: {
      TITLE: 'Success',
      DESCRIPTION: 'Sign in successfully.',
    },
    ERROR: {
      TITLE: 'Error',
      DESCRIPTION: 'An error occurred while Sign in. Please try again.',
    },
  },
};
