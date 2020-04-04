import { isIOS, deeplinkConverter } from '../utils';

const iOSAgent =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
const notIOSAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36';

describe('Deeplink converter', () => {
  test('converts username', () => {
    expect(deeplinkConverter('/beard__code/')).toBe('instagram://user?username=beard__code');
  });
  test('converts tag', () => {
    expect(deeplinkConverter('/explore/tags/js/')).toBe('instagram://tag?name=js');
  });
  test('converts location', () => {
    expect(deeplinkConverter('/explore/locations/213174824/')).toBe('instagram://location?id=213174824');
  });
  test('converts location with alias', () => {
    expect(deeplinkConverter('/explore/locations/213174824/saint-petersburg-russia/')).toBe(
      'instagram://location?id=213174824',
    );
  });
  test('converts post', () => {
    expect(deeplinkConverter('/p/B6f78z7jr42/')).toBe('instagram://media?id=B6f78z7jr42');
  });
  test('converts app', () => {
    expect(deeplinkConverter('/')).toBe('instagram://app');
  });

  test('handles path without slashes', () => {
    expect(deeplinkConverter('beard__code')).toBe('instagram://user?username=beard__code');
  });
  test('handles path with trailing slash', () => {
    expect(deeplinkConverter('beard__code/')).toBe('instagram://user?username=beard__code');
  });
});

describe('isIOS', () => {
  test('returns true if user-agent is related to iOS', () => {
    expect(isIOS(iOSAgent)).toBe(true);
  });
  test('returns false if user-agent is not related to iOS', () => {
    expect(isIOS(notIOSAgent)).toBe(false);
  });
});
