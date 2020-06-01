import * as React from 'react';
import fetchMock from 'fetch-mock';
import { render, waitFor } from '@testing-library/react';
import { baseUrl } from '@app-up/network/src/make-request';
import queryString from 'query-string';
import withAppUp from '../with-app-up';

const MockDisplay = (props) => (
  <div>
    <div>{JSON.stringify(props)}</div>
  </div>
);

describe('withAppUp HOC', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('Test Request Success with Account', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { version: '1.0.0' });
    const MockComponent = withAppUp(appId, platform)(MockDisplay);
    const { getByText } = render(<MockComponent />);
    expect(getByText(/"loading":true/)).toBeTruthy();
    await waitFor(() => getByText(/"loading":false/));
    getByText(/"version":"1.0.0"/);
  });

  it('SS Version Check Success with Account', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const version = '1.0.0';
    const query = queryString.stringify({ platform, appId, version });
    fetchMock.get(baseUrl + '?' + query, { version: '1.0.0' });
    const MockComponent = withAppUp(appId, platform, version)(MockDisplay);
    const { getByText } = render(<MockComponent />);
    expect(getByText(/"loading":true/)).toBeTruthy();
    await waitFor(() => getByText(/"loading":false/));
    getByText(/"version":"1.0.0"/);
  });

  it('Test Request Success without Account', async () => {
    const appId = 'no account';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { upToDate: true });
    const MockComponent = withAppUp(appId, platform)(MockDisplay);
    const { getByText } = render(<MockComponent />);
    expect(getByText(/"loading":true/)).toBeTruthy();
    await waitFor(() => getByText(/"loading":false/));
    getByText(/"upToDate":true/);
  });

  it('Called with Incorrect Platform', async () => {
    const appId = 'testId';
    const platform = 'web';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, { upToDate: true });
    console.warn = jest.fn();
    const MockComponent = withAppUp(appId, platform)(MockDisplay);
    const { getByText } = render(<MockComponent />);
    expect(getByText(/"loading":true/)).toBeTruthy();
    await waitFor(() => getByText(/"loading":false/));
    expect(console.warn).toBeCalledWith('Platform: web is not supported.');
  });

  it('Test Failed Response', async () => {
    const appId = 'testId';
    const platform = 'ios';
    const query = queryString.stringify({ platform, appId });
    fetchMock.get(baseUrl + '?' + query, 500);
    const MockComponent = withAppUp(appId, platform)(MockDisplay);
    const { getByText } = render(<MockComponent />);
    expect(getByText(/"loading":true/)).toBeTruthy();
    await waitFor(() => getByText(/"loading":false/));
    getByText(/"upToDate":true/);
  });
});
