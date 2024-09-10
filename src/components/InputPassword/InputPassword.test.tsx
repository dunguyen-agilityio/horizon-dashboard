import { fireEvent, render } from '@testing-library/react';

// Components
import InputPassword from '@/components/InputPassword';

const inputPlaceholder = 'This is default placeholder';

describe('InputPassword tests', () => {
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  it('Should match snapshot', () => {
    const { container } = render(<InputPassword />);
    expect(container).toMatchSnapshot();
  });

  it('Should render EyeFilled icon', () => {
    const { getByTestId } = render(<InputPassword />);
    expect(getByTestId('eye-filled-icon')).toBeInTheDocument();
  });

  it('Should render EyeSlashFilled icon when click EyeFilled', () => {
    const { getByTestId } = render(<InputPassword />);
    const eyeFilledIcon = getByTestId('eye-filled-icon');

    fireEvent.click(eyeFilledIcon);
    expect(getByTestId('eye-slash-filled-icon')).toBeInTheDocument();
  });

  it('Should render Password label', () => {
    const { getByLabelText } = render(<InputPassword />);
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('Should render placeholder Password input', () => {
    const { getByPlaceholderText } = render(
      <InputPassword placeholder={inputPlaceholder} />,
    );
    expect(getByPlaceholderText(inputPlaceholder)).toBeInTheDocument();
  });

  it('Should trigger onChange on Password input', async () => {
    const { getByTestId } = render(
      <InputPassword placeholder={inputPlaceholder} onChange={onChangeMock} />,
    );
    const mockChange = 'value';

    expect(getByTestId('input-password')).toBeInTheDocument();

    fireEvent.change(getByTestId('input-password'), {
      target: { value: mockChange },
    });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
