import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

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
  const [page, setPage] = useState(1);

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
            offset: (page - 1) * 10,
          },
        });
        setCoins(response.data.data);
        setIsLoading(false);
      } catch (e: any) {
        setError(e);
        setIsLoading(false);
      }
    }
    getCoins();
  }, [page]);
  return { coins, isLoading, error, setPage, page };
};

const CoinRanking = () => {
  const { coins, isLoading, error, setPage, page } = useGetCoins();

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const handleCoinClick = (coin: any) => {
    console.log("hello", coin);
  };

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
              coins?.coins.map((coin: any, index: number) => (
                <TableRow
                  key={index}
                  onClick={() => handleCoinClick(coin)}
                  hover={true}
                >
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
      <Box display="flex" justifyContent="flex-end" sx={{ marginTop: "1rem" }}>
        {coins ? (
          <Pagination
            onChange={handlePageChange}
            count={Math.ceil(coins?.stats.total / 10) - 1}
            variant="outlined"
            shape="rounded"
            page={page}
          />
        ) : null}
      </Box>
    </div>
  );
};

export { CoinRanking };
