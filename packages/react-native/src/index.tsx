import * as React from 'react';
import makeRequest from '@appup/network';

export type AppUpProps = {
  appId: string;
  platform: string;
};

export const withAppUp = (appId: string, platform: string) => <
  P extends object
>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AppUpHoc: React.FC<P & AppUpProps> = (componentProps: P) => {
    const appUpProps = useAppUp(appId, platform);
    return <WrappedComponent {...componentProps} {...appUpProps} />;
  };
  return AppUpHoc;
};

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
