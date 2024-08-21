export const isRequired = (value: string | null | undefined): boolean =>
  !!value;

export const isValidFormat = (value = '', pattern: RegExp): boolean =>
  value == '' || pattern.test(value);

export const isEnableSubmitButton = (
  requiredFields: string[],
  dirtyFields: string[],
  errors: Record<string, unknown>,
): boolean => {
  const isMatchAllRequiredFields: boolean = requiredFields.every((field) =>
    dirtyFields.includes(field),
  );

  return isMatchAllRequiredFields && errors && !Object.keys(errors).length;
};
