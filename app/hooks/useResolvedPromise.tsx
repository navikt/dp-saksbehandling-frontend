import { useEffect, useState } from "react";

interface PromiseState<T> {
  loading: boolean;
  response: T | null;
  error: Error | null;
}

/**
 * Custom hook that handles a pending promise (like from React Router's deferred data)
 * and returns its resolved data along with loading and error states.
 *
 * @param promise A promise that may still be pending from React Router
 * @returns Object containing loading state, resolved data and error (if any)
 */
export function useAwaitPromise<T>(promise: Promise<T>): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>({
    loading: true,
    response: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function resolvePromise() {
      try {
        const result = await promise;

        if (isMounted) {
          setState({
            loading: false,
            response: result,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            loading: false,
            response: null,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      }
    }

    resolvePromise();

    return () => {
      isMounted = false;
    };
  }, [promise]);

  return state;
}
