import { capitalizeFirstLetter } from '../format';

describe('formatData', () => {
  it('should format the user name to upper case on first letter', () => {
    const userName = 'chris evant';
    const expectedUserName = 'Chris evant';

    const formatUserName = capitalizeFirstLetter(userName);

    expect(formatUserName).toBe(expectedUserName);
  });
});
