import { act, fireEvent, render, waitFor } from '@testing-library/react';

// Components
import InputPassword from '@/components/InputPassword';

const inputPlaceholder = 'This is default placeholder';

describe('InputPassword tests', () => {
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  it('Should match snapshot', () => {
    const { container } = render(<InputPassword onChange={onChangeMock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render EyeSlashFilled icon', () => {
    const { getByTestId } = render(<InputPassword onChange={onChangeMock} />);
    expect(getByTestId('eye-slash-filled-icon')).toBeInTheDocument();
  });

  it('Should render EyeFilled icon when click EyeSlashFilled', () => {
    const { getByTestId } = render(<InputPassword onChange={onChangeMock} />);
    const eyeSlashFilledIcon = getByTestId('eye-slash-filled-icon');

    fireEvent.click(eyeSlashFilledIcon);
    expect(getByTestId('eye-filled-icon')).toBeInTheDocument();
  });

  it('Should render Password label', () => {
    const { getByLabelText } = render(
      <InputPassword onChange={onChangeMock} />,
    );
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('Should render placeholder Password input', () => {
    const { getByPlaceholderText } = render(
      <InputPassword placeholder={inputPlaceholder} onChange={onChangeMock} />,
    );
    expect(getByPlaceholderText(inputPlaceholder)).toBeInTheDocument();
  });

  it('Should trigger onChange on Password input', async () => {
    const { getByTestId } = render(
      <InputPassword placeholder={inputPlaceholder} onChange={onChangeMock} />,
    );
    const mockChange = 'value';

    expect(getByTestId('input-password')).toBeInTheDocument();

    act(() => {
      fireEvent.change(getByTestId('input-password'), {
        target: { value: mockChange },
      });
    });

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
