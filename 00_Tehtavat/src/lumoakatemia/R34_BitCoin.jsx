import { useState, useEffect } from "react";
export default function BitCoin() {
  const [valuutat, setValuutat] = useState({});

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp"
    )
      .then((response) => response.json())
      .then((data) => setValuutat(data.bitcoin));
  }, []);
  return Object.entries(valuutat).map(([currency, price]) => (
    <p>
      {currency}: {price}
    </p>
  ));
}
