'use client';

import { Button as NUIButton } from '@nextui-org/button';
import { extendVariants } from '@nextui-org/system';

export const Button = extendVariants(NUIButton, {
  variants: {
    size: {
      fit: 'p-0 min-w-fit h-fit',
    },
    isDisabled: {
      true: 'text-black dark:text-white opacity-50 cursor-not-allowed',
    },
  },
});

export default Button;
