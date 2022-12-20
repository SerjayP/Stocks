import { Link } from "react-router-dom";
import data from "../data";
export default function Dashboard(props) {
  return (
    <>
    <h1>Most Active Stocks</h1>
    <div className="entireDash">
      <div className="aboveDash">
      <h4 className="Left">Company Name </h4>
      <h4 className="Middle">Price</h4>
      <h4 className="Right">Change</h4>
      </div>
      <div className="dashboard">
        {data.map((info) => {
          const { name, symbol, lastPrice, change } = info;
          return (
            <div className="inner"> 
            <Link to={`/stocks/${symbol}`}>
              <h3 className="Left">{`${name} (${symbol})`}</h3> </Link>
              <h3 className="Middle">{lastPrice}</h3>
              <h3 className="Right">{change.toFixed(2)}</h3>
            
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
