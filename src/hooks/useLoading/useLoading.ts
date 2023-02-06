import React from 'react';

export interface UseLoadingResult {
  loading: boolean;
  doAction: () => void;
}

function useLoading<Args extends ReadonlyArray<unknown>>(
  action: (...args: Args) => Promise<void>,
): UseLoadingResult {
  const [loading, setLoading] = React.useState<boolean>(false);
  const doAction = (...args: Args) => {
    setLoading(true);
    return action(...args).finally(() => setLoading(false));
  };

  return {doAction, loading};
}

export default useLoading;
