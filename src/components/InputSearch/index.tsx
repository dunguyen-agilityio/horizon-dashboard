import React, { forwardRef } from 'react';

import SearchIcon from '@/icons/Search';
import { useInput } from '@nextui-org/input';
import { DOMElement } from '@nextui-org/system';

interface InputSearchProps {
  onSearch: (value: string) => void;

  className?: string;
  value?: string;
  defaultValue?: string;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ onSearch, ...props }, ref) => {
    const {
      Component,
      domRef,
      startContent,
      getBaseProps,
      getInputProps,
      getInnerWrapperProps,
      getInputWrapperProps,
    } = useInput({
      ...props,
      ref,
      type: 'search',
      placeholder: 'Search...',
      startContent: <SearchIcon />,
      // custom styles
      classNames: {
        input: [
          'placeholder-purple-50 dark:placeholder-white text-primary dark:text-white',
        ],
        inputWrapper: [
          'bg-gray group-data-[focus=true]:bg-gray dark:bg-indigo-dark dark:group-data-[focus=true]:bg-indigo-dark rounded-[30px]',
        ],
        innerWrapper: ['flex gap-[11px] pl-[20px]'],
      },
    });

    const innerWrapper = React.useMemo(() => {
      const { onChange, ...rest } = getInputProps();

      const handleChange = (e: React.FormEvent<DOMElement>) => {
        onChange?.(e);
        const { value } = e.currentTarget as HTMLInputElement;
        onSearch(value);
      };

      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...rest} onChange={handleChange} />
        </div>
      );
    }, [startContent, getInputProps, getInnerWrapperProps, onSearch]);

    return (
      <Component {...getBaseProps()}>
        <div
          {...getInputWrapperProps()}
          role="button"
          onClick={() => {
            domRef.current?.focus();
          }}
        >
          {innerWrapper}
        </div>
      </Component>
    );
  },
);

InputSearch.displayName = 'InputSearch';

export default InputSearch;
