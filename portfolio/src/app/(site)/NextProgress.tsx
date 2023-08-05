'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProvidersLoading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color='gray'
       
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProvidersLoading;
