import * as React from 'react';
import makeRequest from '@app-up/network';

function useAppUp(appId: string, platform: string) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    makeRequest(appId, platform).then((appData: any) => {
      if (mounted) {
        setData(appData);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [appId, platform]);
  return { data, loading };
}

export default useAppUp;
