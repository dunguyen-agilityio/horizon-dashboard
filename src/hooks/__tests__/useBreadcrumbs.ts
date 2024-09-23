import { renderHook } from '@testing-library/react';
import useBreadcrumbs from '../useBreadcrumbs';
import { PUBLIC_ROUTES } from '@/constants';
import { usePathname } from 'next/navigation';

describe('getBreadcrumbs utils tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('useBreadcrumbs will return correctly value', () => {
    const mockPathname = `${PUBLIC_ROUTES.NFT_MARKETPLACE}/123`;

    (usePathname as jest.Mock).mockImplementation(() => mockPathname);

    const { result } = renderHook(() => useBreadcrumbs());

    expect(result.current).toStrictEqual([
      { title: 'NFT Marketplace', href: PUBLIC_ROUTES.NFT_MARKETPLACE },
      { title: '123', href: mockPathname },
    ]);
  });

  it('useBreadcrumbs will return correctly value', () => {
    (usePathname as jest.Mock).mockImplementation(
      () => PUBLIC_ROUTES.NFT_MARKETPLACE,
    );

    const { result } = renderHook(() => useBreadcrumbs());

    expect(result.current).toStrictEqual([
      { title: 'NFT Marketplace', href: PUBLIC_ROUTES.NFT_MARKETPLACE },
    ]);
  });
});
