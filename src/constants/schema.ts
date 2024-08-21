import { z } from 'zod';

import { isRequired, isValidFormat } from '@/utils/validation';

// Constants
import { ERROR_MESSAGES } from '@/constants/messages';
import { REGEX_EMAIL } from '@/constants/regex';

export const UserSigninFormDataSchema = z.object({
  email: z
    .string()
    .min(1, ERROR_MESSAGES.FIELD_REQUIRED)
    .refine(
      (value) => isValidFormat(value, REGEX_EMAIL),
      ERROR_MESSAGES.FORMAT('Email'),
    ),
  password: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
});
