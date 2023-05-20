import "./FinancialHighlightsSec.css";
import { useQuery } from "react-query";
import axios from "axios";
import { formatter, isNegative } from "../../../Services/services";
import "./FinancialHighlightsSec.css";

function FinancialHighlightsSec() {
  const { isLoading, isError, data } = useQuery(["financialHighlights"], () =>
    axios
      .get(
        "https://data.argaam.com/api/v1.0/json/ir-widget/financial-highlights",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => res.data)
  );

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (isError) {
    return <div>...Error</div>;
  }

  return (
    <div className="my-5 financial-highlights">
      <div className="d-flex justify-content-between my-5">
        <h3>Financial Highlights (M SAR)</h3>
        <div className="currency-btns d-flex flex-row">
          <div>
            <button>USD</button>
          </div>

          <div>
            <button>SAR</button>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">description</th>
              <th scope="col">Chart</th>
              <th scope="col">2020</th>
              <th scope="col">2019</th>
              <th scope="col">2018</th>
              <th scope="col">2017</th>
              <th scope="col">2016</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((highlight, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{highlight.FSFieldName}</th>
                  <td>
                    <img
                      src={require("../../../Assets/chart-icon.png")}
                      alt="chart-icon"
                    />
                  </td>
                  <td>{isNegative(highlight[2022])}</td>
                  <td>{isNegative(highlight[2021])}</td>
                  <td>{isNegative(highlight[2020])}</td>
                  <td>{isNegative(highlight[2019])}</td>
                  <td>{isNegative(highlight[2018])}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialHighlightsSec;
