export const baseUrl = 'https://sync.appup.dev/sync';

async function makeRequest(appId: string, platform: string, version?: string) {
  try {
    if (platform === 'android' || platform === 'ios') {
      let queryUrl = `${baseUrl}?appId=${appId}&platform=${platform}`;
      if (version) queryUrl += `&version=${version}`;
      const response = await fetch(queryUrl);
      // Return response from server directly
      if (response.ok === true) {
        const responseJson = await response.json();
        return responseJson;
      }
      // Throw out any 500 responses
      throw Error();
    }
    throw Error(`Platform: ${platform} is not supported.`);
  } catch (err) {
    if (err.message) {
      console.warn(err.message);
    }
    return { version: '', upToDate: true };
  }
}

export default makeRequest;
