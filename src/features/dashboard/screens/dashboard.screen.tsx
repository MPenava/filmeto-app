import React from "react";
import { Text } from "react-native";

import { useGetStats } from "../queries";

const DashboardScreen = () => {
  const { data: stats } = useGetStats();

  console.log(stats);
  return <Text>stats - {stats?.statusText ?? ""}</Text>;
};

export { DashboardScreen };
