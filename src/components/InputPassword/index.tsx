'use client';

import { ChangeEventHandler, useState } from 'react';

// Components
import BoxIcon from '@/components/BoxIcon';
import { Input } from '@nextui-org/input';

// Icons
import { EyeFilled, EyeSlashFilled } from '@/icons';

interface IInputPasswordProps {
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  value?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputPassword = ({
  errorMessage = '',
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  placeholder = 'Min. 8 characters',
  value,
  label = 'Password',
  onChange,
  ...rest
}: IInputPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      data-testid="input-password"
      aria-label="inputPassword"
      isRequired
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      size="lg"
      key="password"
      label={label}
      type={isVisible ? 'text' : 'password'}
      labelPlacement="outside"
      placeholder={placeholder}
      value={value}
      errorMessage={errorMessage}
      onChange={onChange}
      {...rest}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          <BoxIcon
            icon={isVisible ? <EyeFilled /> : <EyeSlashFilled />}
            customClass="fill-secondary"
          />
        </button>
      }
    />
  );
};

export default InputPassword;
