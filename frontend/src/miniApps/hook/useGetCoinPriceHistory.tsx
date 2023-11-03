import { useEffect, useState } from "react";
import { cryptoApi } from "../lib/services/axios";

const useGetCoinPriceHistory = (selectedCoin: any) => {
  const [coinPrices, setCoinPrices] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getCoinPrices() {
      try {
        setIsLoading(true);
        const response = await cryptoApi.get(
          `/coin/${selectedCoin.uuid}/history`,
          {
            params: {
              referenceCurrencyUuid: "yhjMzLPhuIDl",
              timePeriod: "24h",
            },
          }
        );
        setCoinPrices(response.data.data);
      } catch (e: any) {
        setError(e);
        setIsLoading(false);
      }
    }
    getCoinPrices();
  }, [selectedCoin]);

  return { coinPrices, isLoading, error };
};

export { useGetCoinPriceHistory };
