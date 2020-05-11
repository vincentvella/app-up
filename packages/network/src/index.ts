const baseUrl = 'https://sync.appup.dev/sync';

async function makeRequest(appId: string, platform: string) {
  try {
    if (platform === 'android' || platform === 'ios') {
      const response = await fetch(
        `${baseUrl}?appId=${appId}&platform=${platform}`
      );
      const responseJson = await response.json();
      return responseJson;
    }
    throw Error(`Platform: ${platform} is not supported.`);
  } catch (err) {
    console.warn(err.message);
    return { version: '', upToDate: true };
  }
}

export default makeRequest;
