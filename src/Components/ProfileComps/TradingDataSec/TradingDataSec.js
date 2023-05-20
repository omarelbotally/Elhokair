import "./TradingDataSec.css";
import { formatter } from "../../../Services/services";

const TradingDataSec = (props) => {
  return (
    <div className="trading-data">
      <div className="d-flex justify-content-between align-items-center ">
        <div>
          <h3>Trading Data</h3>
        </div>
        <div>
          <p>More </p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Trading Market:</p>
        <p>{props?.content?.marketNameEn}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Fiscal Year End:</p>
        <p>December</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Free Float(M):</p>
        <p>{props?.content?.freeFloatShareValue}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Weight in Index %:</p>
        <p>{formatter(props?.content?.companyWeight)}</p>
      </div>
      <br />

      <div className="d-flex justify-content-between">
        <p className="fw-bold">3M Average Volume:</p>
        <p>{formatter(props?.content?.avgTransactions3Months)}</p>
      </div>
      <br />

      <div className="d-flex justify-content-between">
        <p className="fw-bold">3M Average Transactions</p>
        <p>{formatter(props?.content?.avgVolume3Months)}</p>
      </div>
      <br />
    </div>
  );
};

export default TradingDataSec;
