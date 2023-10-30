import { useState } from "react";
import CoinsTable from "./components/CoinsTable";
import { CoinDetails } from "./components/CoinDetails";

const CoinRanking = () => {
  const [selectedCoin, setSelectedCoin] = useState<any>();

  return (
    <div>
      <CoinsTable
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
      <CoinDetails
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
    </div>
  );
};

export { CoinRanking };
