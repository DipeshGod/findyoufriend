import {
  Box,
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
import { useGetCoins } from "../hook/useGetCoins";
import { ChangeEvent } from "react";

const CoinsTable = ({ selectedCoin, setSelectedCoin }: any) => {
  const { coins, isLoading, error, setPage, page } = useGetCoins();

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const handleCoinClick = (coin: any) => {
    setSelectedCoin(coin);
  };

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
              <Box>
                <CircularProgress color="success" />
              </Box>
            ) : (
              coins?.coins.map((coin: any, index: number) => (
                <TableRow
                  key={index}
                  onClick={() => handleCoinClick(coin)}
                  hover={true}
                  selected={coin?.uuid === selectedCoin?.uuid}
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

export default CoinsTable;
