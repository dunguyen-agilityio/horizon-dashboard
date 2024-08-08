import { Button as NUIButton } from '@nextui-org/button';
import { extendVariants } from '@nextui-org/system';

export const Button = extendVariants(NUIButton, {
  variants: {
    size: {
      fit: 'p-0 min-w-fit h-fit',
    },
  },
});

export default Button;
