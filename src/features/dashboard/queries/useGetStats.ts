import { StatsService } from "@api/services";

import { useQuery } from "@tanstack/react-query";

const useGetStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => StatsService.getStats(),
  });
};

export { useGetStats };
