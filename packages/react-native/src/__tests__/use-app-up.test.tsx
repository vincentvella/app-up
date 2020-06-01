import fetchMock from 'fetch-mock';
import { renderHook } from '@testing-library/react-hooks';
import { baseUrl } from '@app-up/network/src/make-request';
import queryString from 'query-string';
import useAppUp from '../use-app-up';

describe('Test useAppUp hook', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('Test Request Success with Account', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { version: '1.0.0' });
    const { result, waitForNextUpdate } = renderHook(() =>
      useAppUp(appId, platform)
    );
    expect(result.current.loading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual({ version: '1.0.0' });
  });

  it('Test SS Version Check with Account', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const version = '1.0.0';
    const query = queryString.stringify({ platform, appId, version });
    fetchMock.get(baseUrl + '?' + query, { version: '1.0.0' });
    const { result, waitForNextUpdate } = renderHook(() =>
      useAppUp(appId, platform, version)
    );
    expect(result.current.loading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual({ version: '1.0.0' });
  });

  it('Test Request Success without Account', async () => {
    const appId = 'no account';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { upToDate: true });
    const { result, waitForNextUpdate } = renderHook(() =>
      useAppUp(appId, platform)
    );
    expect(result.current.loading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual({ upToDate: true });
  });

  it('Called with Incorrect Platform', async () => {
    const appId = 'testId';
    const platform = 'web';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { upToDate: true });
    console.warn = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() =>
      useAppUp(appId, platform)
    );
    expect(result.current.loading).toBeTruthy();
    await waitForNextUpdate();
    expect(console.warn).toBeCalledWith('Platform: web is not supported.');
  });

  it('Test Failed Response', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, 500);
    const { result, waitForNextUpdate } = renderHook(() =>
      useAppUp('testId', 'ios')
    );
    expect(result.current.loading).toBeTruthy();
    await waitForNextUpdate();
    expect(result?.current?.data?.upToDate).toStrictEqual(true);
  });

  it('Test unmounting does nothing', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(
      baseUrl + '?' + query,
      setTimeout(() => {
        Promise.resolve({ upToDate: true });
      }, 500)
    );
    const { result, unmount } = renderHook(() => useAppUp('testId', 'ios'));
    expect(result.current.loading).toBeTruthy();
    unmount();
    expect(result.current.loading).toBeTruthy();
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });
});
