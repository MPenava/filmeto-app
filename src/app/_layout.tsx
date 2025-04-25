import { Stack } from "expo-router";

import "../i18n";
import { QueryProvider } from "../providers";

const RootLayout = () => {
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryProvider>
  );
};

export default RootLayout;
