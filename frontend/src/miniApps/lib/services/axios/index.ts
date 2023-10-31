import axios from "axios";

const cryptoApi = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "4c50da5040mshf75aa74f17a1faap1bb575jsn94ac27ca284b",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});
export { cryptoApi };
