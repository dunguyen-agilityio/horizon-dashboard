import { fireEvent, render, waitFor } from '@testing-library/react';
import Notification from '.';
import { MOCK_NOTIFIES } from '@/mocks/notify';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
}));

describe('Notification tests', () => {
  const setup = () => render(<Notification notifies={MOCK_NOTIFIES} />);
  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should show Notification list when click button', async () => {
    const { getByTestId, queryByTestId } = setup();
    expect(queryByTestId('notification-list')).not.toBeInTheDocument();

    fireEvent.click(getByTestId('notify-button'));
    await waitFor(() => {
      expect(queryByTestId('notification-list')).toBeInTheDocument();
    });
  });

  it('Should trigger action link when user click Notification Item', () => {
    const { getByTestId, getAllByTestId } = setup();

    fireEvent.click(getByTestId('notify-button'));

    const { link } = MOCK_NOTIFIES[0];
    fireEvent.click(getAllByTestId('notification-item')[0]);
    expect(mockPush).toHaveBeenNthCalledWith(1, link);
  });
});
