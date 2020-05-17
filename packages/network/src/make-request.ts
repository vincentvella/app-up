export const baseUrl = 'https://sync.appup.dev/sync';

async function makeRequest(appId: string, platform: string) {
  try {
    if (platform === 'android' || platform === 'ios') {
      const response = await fetch(
        `${baseUrl}?appId=${appId}&platform=${platform}`
      );
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
