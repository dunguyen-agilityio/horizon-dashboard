import { act, renderHook } from '@testing-library/react';
import useTimeOut from '../useTimeOut';

describe('useTimeOut tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('useTimeOut will return correctly value', () => {
    const { result } = renderHook(() => useTimeOut(5));
    expect(result.current.time).toEqual(4);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.time).toEqual(2);
    expect(result.current.isDisabled).toEqual(true);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.time).toEqual(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.time).toEqual(0);
    expect(result.current.isDisabled).toEqual(false);
  });
});
