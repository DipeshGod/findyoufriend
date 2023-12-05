// import { useEffect, useState } from "react";
// import { cryptoApi } from "../lib/services/axios";

import { useQuery } from "@tanstack/react-query";
import { cryptoApi } from "../lib/services/axios";

// const useGetCoinDetails = (selectedCoin: any) => {
//   const [coin, setCoin] = useState<any>();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function getCoinDetails() {
//       try {
//         setIsLoading(true);
//         const response = await cryptoApi.get(`/coin/${selectedCoin.uuid}`, {
//           params: {
//             referenceCurrencyUuid: "yhjMzLPhuIDl",
//             timePeriod: "24h",
//           },
//         });

//         setCoin(response.data.data.coin);
//         setIsLoading(false);
//       } catch (e: any) {
//         setError(e);
//         setIsLoading(false);
//       }
//     }
//     getCoinDetails();
//   }, [selectedCoin]);
//   return { coin, isLoading, error };
// };
// export { useGetCoinDetails };

const getCoinDetails = (id: any) => {
  return cryptoApi.get(`/coin/${id}`, {
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    },
  });
};

const useGetCoinDetails = (selectedCoin: any) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["coins", selectedCoin?.uuid],
    queryFn: () => getCoinDetails(selectedCoin?.uuid),
  });

  return { isLoading, error, coin: data?.data.coin };
};
export { useGetCoinDetails };
