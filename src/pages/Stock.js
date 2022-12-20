import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

export default function Stock(props) {

    const [info, setStock] = useState(null)
    const { symbol } = useParams();

    const getStock = async () => {
        try {
            const stock = data.find(eachStock => eachStock.symbol === symbol)
            setStock(stock)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getStock()
    }, [])

const loaded =() => {
     return (
    <div>
      <h1>{`${info.name} (${info.symbol})`}</h1>
      <h3>Current Price: ${info.lastPrice}</h3>
      <h4>Change: ${info.change.toFixed(2)}</h4>
      <h4>Todays High: ${info.high}</h4>
      <h4>Todays Low: ${info.low}</h4>
      <h4>Todays Open: ${info.open}</h4>
      <a href={`https://finance.yahoo.com/quote/${symbol}`}><button>Click for more {info.symbol} info</button></a>
    </div>
  );
}

const loading = () => {
    return (
        <h1>Please wait, Stock is loading...</h1>
    )
}

return(
    info ? loaded() : loading()
)

}