import React from "react";
import "./ForeignOwnership.css";
import { useQuery } from "react-query";
import axios from "axios";
function ForeginOwnership() {
  const { isLoading, isError, data } = useQuery(["foreignOwnership"], () =>
    axios
      .get("https://data.argaam.com/api/v1.0/json/ir-api/major-shareholders/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
  );

  if (isLoading) {
    return <div> is Loading</div>;
  }
  if (isError) {
    return <div> is Error</div>;
  }

  return (
    <div className="foreign-ownership">
      <h3 className="my-3">Major Shareholders{console.log(data)}</h3>
      <hr />

      {/* MajorShareholder Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Shareholder</th>
              <th scope="col">Type</th>
              <th scope="col">No of Shares</th>
              <th scope="col">Holding</th>
              <th scope="col">Market Value</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data?.shareholders?.map((shareholder, shareholderIndex) => {
              return (
                <tr key={shareholderIndex}>
                  <td>{shareholder.shareholderNameEn}</td>
                  <td>{shareholder.shareholderTypeNameEn}</td>
                  <td>{shareholder.noOfShares}</td>
                  <td>{shareholder.percentage}</td>
                  <td>{shareholder.marketValue}</td>
                  <td>{shareholder.notesEn || "--"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h3 className="my-3">Foreign ownership</h3>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">TOTAL FOREIGN OWNERSHIP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="fw-bold">MAXIMUM LIMIT</td>
              <td className="fw-bold">ACTUAL</td>
            </tr>
            {data?.foreignOwnerships?.map((ownership, ownershipIndex) => {
              return (
                <tr key={ownershipIndex}>
                  <td>{ownership.companyNameEn}</td>
                  <td>{ownership.qfiMaximum}</td>
                  <td>{ownership.tfoActual}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ForeginOwnership;
