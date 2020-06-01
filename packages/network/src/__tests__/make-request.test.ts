import fetchMock from 'fetch-mock';
import queryString from 'query-string';
import makeRequest, { baseUrl } from '../make-request';

describe('Test Request', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('Test Request Success with Account', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { version: '1.0.0' });
    const appUpResponse = await makeRequest(appId, platform);
    expect(appUpResponse.version).toBe('1.0.0');
  });

  it('Server-Side Version Check Success with Account', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const version = '1.0.0';
    const query = queryString.stringify({ platform, appId, version });
    fetchMock.get(baseUrl + '?' + query, { version: '1.0.0' });
    const appUpResponse = await makeRequest(appId, platform, version);
    expect(appUpResponse.version).toBe('1.0.0');
  });

  it('Test Request Success without Account', async () => {
    const appId = 'no account';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { upToDate: true });
    const appUpResponse = await makeRequest(appId, platform);
    expect(appUpResponse.upToDate).toBe(true);
  });

  it('Called with Incorrect Platform', async () => {
    const appId = 'testId';
    const platform = 'web';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { upToDate: true });
    console.warn = jest.fn();
    const appUpResponse = await makeRequest(appId, platform);
    expect(appUpResponse.upToDate).toBe(true);
    expect(console.warn).toBeCalledWith('Platform: web is not supported.');
  });

  it('Test Failed Response', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, 500);
    const appUpResponse = await makeRequest(appId, platform);
    expect(appUpResponse.upToDate).toBe(true);
  });
});
