// import { useEffect, useState } from "react";
// import { cryptoApi } from "../lib/services/axios";

// const useGetCoins = () => {
//   const [coins, setCoins] = useState<any>();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     async function getCoins() {
//       try {
//         setIsLoading(true);
//         const response = await cryptoApi.get("/coins", {
//           params: {
//             referenceCurrencyUuid: "yhjMzLPhuIDl",
//             timePeriod: "24h",
//             "tiers[0]": "1",
//             orderBy: "marketCap",
//             orderDirection: "desc",
//             limit: "10",
//             offset: (page - 1) * 10,
//           },
//         });
//         setCoins(response.data.data);
//         setIsLoading(false);
//       } catch (e: any) {
//         setError(e);
//         setIsLoading(false);
//       }
//     }
//     getCoins();
//   }, [page]);
//   return { coins, isLoading, error, setPage, page };
// };
// export { useGetCoins };

import { useQuery } from "@tanstack/react-query";
import { cryptoApi } from "../lib/services/axios";
import { useState } from "react";

const getCoins = (page = 1) => {
  return cryptoApi.get("/coins", {
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "10",
      offset: (page - 1) * 10,
    },
  });
};

const useGetCoins = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => getCoins(page),
  });

  return { isLoading, coins: data?.data.data, error, page, setPage };
};
export { useGetCoins };
