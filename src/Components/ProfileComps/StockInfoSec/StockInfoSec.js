import { formatter } from "../../../Services/services";
const StockInfoSec = (props) => {
  return (
    <div className="stock-info">
      <div className="d-flex justify-content-between align-items-center ">
        <div>
          <h3>Stock Information</h3>
        </div>
        <div>
          <p>More </p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Shares Outstanding(M)</p>
        <p>{formatter(props?.content?.numberOfShares)}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Par Value(Riyal):</p>
        <p>{formatter(props?.content?.nominalValue)}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Book Value:</p>
        <p>{formatter(props?.content?.bookValue)}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Maker Cap(M)</p>
        <p>{formatter(props?.content?.marketValue)}</p>
      </div>
      <br />
    </div>
  );
};

export default StockInfoSec;
