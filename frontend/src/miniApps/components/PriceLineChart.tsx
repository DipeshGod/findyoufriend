import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";
import { Line } from "react-chartjs-2";
import { useGetCoinPriceHistory } from "../hook/useGetCoinPriceHistory";
import { CircularProgress } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function elementsAtInterval(array: any, interval: number) {
  return array.filter((_, index) => index % interval === 0);
}

const PriceLineChart = ({ selectedCoin }: any) => {
  const { coinPrices, isLoading } = useGetCoinPriceHistory(selectedCoin);

  const monthlyTimeStamp = elementsAtInterval(coinPrices.history, 30);
  console.log(monthlyTimeStamp);

  const data = {
    labels,
    datasets: [
      {
        label: selectedCoin?.name,
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const x = new Date(1700265600 * 1000);
  console.log(x);
  console.log(x.getMonth());

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: `${selectedCoin?.name} Monthly Price`,
              },
            },
          }}
          data={data}
        />
      )}
    </div>
  );
};

export default PriceLineChart;
