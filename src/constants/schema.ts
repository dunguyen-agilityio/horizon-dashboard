import { z } from 'zod';

import { isRequired } from '@/utils/validation';

// Constants
import { ERROR_MESSAGES } from './messages';

export const UserSigninFormDataSchema = z.object({
  email: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  password: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
});
