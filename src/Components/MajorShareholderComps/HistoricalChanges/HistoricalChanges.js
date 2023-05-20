import React from "react";
import "./HistoricalChanges.css";
import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";
import { formatter } from "../../../Services/services";
function HistoricalChanges() {
  const { isLoading, isError, data } = useQuery(["shareholder-history"], () =>
    axios
      .get(
        "https://data.argaam.com/api/v1.0/json/ir-widget/shareholders-history",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => res.data)
  );
  if (isLoading) {
    return <div>is Loading</div>;
  }

  if (isError) {
    return <div>is Error</div>;
  }
  return (
    <div className="historical-changes my-3">
      <h3>HistoricalChanges{console.log(data)}</h3>
      <hr />

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Shareholder</th>
              <th scope="col">Prev.Holding</th>
              <th scope="col">Curr.Holding</th>
              <th scope="col">Change</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((hChange, hChangeIndex) => {
              return (
                <tr key={hChangeIndex}>
                  <td> {moment(hChange.forDate).format("DD/MM/YYYY")}</td>
                  <td>{hChange.shareholderNameEn}</td>
                  <td>{hChange.previousPercentage || "--"}</td>
                  <td>
                    {hChange.percentage < 5 ? (
                      <p style={{ color: "red" }}>Less Than 5%</p>
                    ) : (
                      hChange.percentage
                    )}
                  </td>
                  <td>{formatter(hChange.percentageChange) || "--"}</td>
                  <td>{hChange.notesEn || "--"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoricalChanges;
