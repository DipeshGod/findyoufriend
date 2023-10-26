import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const coinRankingApi = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "4c50da5040mshf75aa74f17a1faap1bb575jsn94ac27ca284b",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});

const useGetCoins = () => {
  const [coins, setCoins] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getCoins() {
      try {
        setIsLoading(true);
        const response = await coinRankingApi.get("/coins", {
          params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: "24h",
            "tiers[0]": "1",
            orderBy: "marketCap",
            orderDirection: "desc",
            limit: "10",
            offset: "0",
          },
        });
        console.log(response);
        setCoins(response.data.data.coins);
        setIsLoading(false);
      } catch (e: any) {
        setError(e);
        setIsLoading(false);
      }
    }
    getCoins();
  }, []);
  return { coins, isLoading, error };
};

const CoinRanking = () => {
  const { coins, isLoading, error } = useGetCoins();

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <CircularProgress color="success" />
  //       </div>
  //     );
  //   }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <div>
                <CircularProgress color="success" />
              </div>
            ) : (
              coins?.map((coin: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{coin.rank}</TableCell>
                  <TableCell>
                    <img src={coin.iconUrl} height={30} width={30} />
                  </TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>{coin.price}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { CoinRanking };
