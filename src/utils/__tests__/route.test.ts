import { PUBLIC_ROUTES } from '@/constants';

import { isRouteMatch, getParams, getBreadcrumbs } from '../route';

describe('isRouteMatch utils tests', () => {
  it('isRouteMatch will return correctly value', () => {
    expect(
      isRouteMatch(
        '/nft-marketplace/123',
        PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL,
      ),
    ).toEqual(true);
  });

  it('isRouteMatch will return correctly value', () => {
    expect(
      isRouteMatch('/nft-favorite', PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL),
    ).toEqual(false);
  });
});

describe('getParams utils tests', () => {
  it('getParams will return correctly value', () => {
    expect(
      getParams('/nft-marketplace/123', PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL),
    ).toEqual(['123']);
  });
});

describe('getBreadcrumbs utils tests', () => {
  it('getBreadcrumbs will return correctly value', () => {
    const pathname = '/nft-marketplace/123';

    expect(getBreadcrumbs(pathname)).toStrictEqual([
      { title: 'NFT Marketplace', href: PUBLIC_ROUTES.NFT_MARKETPLACE },
      { title: '123', href: pathname },
    ]);
  });

  it('getBreadcrumbs will return correctly value', () => {
    const pathname = '/nft-marketplace';

    expect(getBreadcrumbs(pathname)).toStrictEqual([
      { title: 'NFT Marketplace', href: PUBLIC_ROUTES.NFT_MARKETPLACE },
    ]);
  });
});
