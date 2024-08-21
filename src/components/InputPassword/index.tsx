'use client';

import { useState } from 'react';

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
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange: (value: string) => void;
}

const InputPassword = ({
  defaultValue,
  errorMessage = '',
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  placeholder = 'Min. 8 characters',
  value,
  onChange,
}: IInputPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleOnChange = (value: string) => onChange(value);

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
      label="Password"
      type={isVisible ? 'text' : 'password'}
      labelPlacement="outside"
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      errorMessage={errorMessage}
      onChange={(e) => handleOnChange(e.target.value)}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <BoxIcon icon={<EyeFilled />} customClass="fill-secondary" />
          ) : (
            <BoxIcon icon={<EyeSlashFilled />} customClass="fill-secondary" />
          )}
        </button>
      }
    />
  );
};

export default InputPassword;
