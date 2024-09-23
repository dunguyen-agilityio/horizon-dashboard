import { PUBLIC_ROUTES } from '@/constants';

import { isRouteMatch, getParams } from '../route';

const pathname = `${PUBLIC_ROUTES.NFT_MARKETPLACE}/123`;

describe('isRouteMatch utils tests', () => {
  it('isRouteMatch will return correctly value', () => {
    expect(
      isRouteMatch(pathname, PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL),
    ).toEqual(true);
  });

  it('isRouteMatch will return correctly value', () => {
    expect(
      isRouteMatch(
        PUBLIC_ROUTES.NFT_MARKETPLACE,
        PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL,
      ),
    ).toEqual(false);
  });
});

describe('getParams utils tests', () => {
  it('getParams will return correctly value', () => {
    expect(getParams(pathname, PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL)).toEqual([
      '123',
    ]);
  });
});
