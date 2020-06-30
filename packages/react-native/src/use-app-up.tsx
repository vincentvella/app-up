import * as React from 'react';
import makeRequest from '@app-up/network';

type AppUpResponse =
  | {
      upToDate: boolean;
      version: string;
      url?: string;
    }
  | undefined;

function useAppUp(appId: string, platform: string, version?: string) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<AppUpResponse>(undefined);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    makeRequest(appId, platform, version).then((appData: any) => {
      if (mounted) {
        setData(appData);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [appId, platform, version]);
  return { data, loading };
}

export default useAppUp;
