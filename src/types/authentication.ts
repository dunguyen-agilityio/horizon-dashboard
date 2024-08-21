import { z } from 'zod';

// Schema
import { UserSigninFormDataSchema } from '@/constants/schema';

export type UserSignin = z.infer<typeof UserSigninFormDataSchema>;
