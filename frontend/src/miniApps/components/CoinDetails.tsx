import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const CoinDetails = ({ selectedCoin, setSelectedCoin }: any) => {
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
    </Dialog>
  );
};

export { CoinDetails };
