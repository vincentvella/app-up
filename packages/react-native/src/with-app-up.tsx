import * as React from 'react';
import useAppUp from './use-app-up';

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

export default withAppUp;
