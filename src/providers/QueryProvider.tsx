import Toast from "react-native-toast-message";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

type QueryProviderProps = {
  children?: React.ReactNode;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: Number.POSITIVE_INFINITY,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      Toast.show({
        type: "mediclix",
        text1: error.message,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      Toast.show({
        type: "mediclix",
        text1: error.message,
      });
    },
  }),
});

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryProvider };
