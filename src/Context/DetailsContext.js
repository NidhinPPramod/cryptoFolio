import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DetailsContext = createContext({
  currency: [""],
  coin: null,
  getCoinDetails: () => Function,
});

export const useDetails = () => useContext(DetailsContext);

export default function DetailsContextProvider({ children }) {
  const [currency, setCurrency] = useState([""]);
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCurrency(res.data);
      });
  }, []);

  function getCoinDetails(coinid) {
    return axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinid}`)
      .then((res) => {
        setCoin(res.data);
      });
  }

  const value = { currency, getCoinDetails, coin };

  return (
    <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
  );
}
