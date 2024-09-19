import { User } from '@/models/User';
import { UserExtend } from '@/types/user';

export const formatUser = (data: UserExtend) => new User(data);
