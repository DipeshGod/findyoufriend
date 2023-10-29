import { useState } from "react";
import CoinsTable from "./components/CoinsTable";

const CoinRanking = () => {
  const [selectedCoin, setSelectedCoin] = useState<any>();

  return (
    <div>
      <CoinsTable
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
    </div>
  );
};

export { CoinRanking };
