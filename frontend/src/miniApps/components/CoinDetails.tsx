import {
  AppBar,
  Box,
  Container,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { TransitionProps } from "@mui/material/transitions";

import { useGetCoinDetails } from "../hook/useGetCoinDetails";
import React from "react";
import { useGetCoinPriceHistory } from "../hook/useGetCoinPriceHistory";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const CoinDetails = ({ selectedCoin, setSelectedCoin }: any) => {
  const { coin, isLoading } = useGetCoinDetails(selectedCoin);
  const { coinPrices, isLoading: isCoinPricesLoding } =
    useGetCoinPriceHistory(selectedCoin);
  console.log(coinPrices);
  console.log(coin);
  return (
    <Dialog
      fullScreen
      open={selectedCoin !== undefined}
      onClose={() => {
        setSelectedCoin(undefined);
      }}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack spacing={2} direction="row">
            <img src={selectedCoin?.iconUrl} height={30} width={30} />
            <Typography variant="h5">{selectedCoin?.name}</Typography>
          </Stack>

          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              setSelectedCoin(undefined);
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <Box
          height="100%"
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Loading {selectedCoin.name}</Typography>
        </Box>
      ) : (
        <Container>
          <Box marginY="2rem">
            <Box marginY="2rem">
              <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                {coin.name} Price Details
              </Typography>
              <Typography gutterBottom>Price: {coin.price}</Typography>
              <Typography gutterBottom>Change % {coin.change}</Typography>
            </Box>

            <Box marginY="2rem">Chart</Box>
            <Box marginY="2rem">
              <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                {coin.name} Market Information
              </Typography>
              <Typography gutterBottom>Rank: {coin.rank}</Typography>
              <Typography gutterBottom>Market Cap: {coin.marketCap}</Typography>
              <Typography gutterBottom>
                Total Supply: {coin.supply.total}
              </Typography>
            </Box>
            <Box marginY="2rem">
              <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                About {coin.name}
              </Typography>
              <Typography gutterBottom>{coin.description}</Typography>
            </Box>
          </Box>
        </Container>
      )}
    </Dialog>
  );
};

export { CoinDetails };
