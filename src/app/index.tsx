import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.root}
        edges={["top", "left", "right", "bottom"]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{t("INITIAL_TEXT")}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default Login;
