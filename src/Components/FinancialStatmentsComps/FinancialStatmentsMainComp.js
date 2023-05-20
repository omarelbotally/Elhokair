import React, { useState } from "react";
import "./FinancialStatmentsMainComp.css";
import { useQuery } from "react-query";
import { useEffect } from "react";
import axios from "axios";
import Accordion from "../GlobalComps/Accordion/Accordion";
function FinancialStatmentsMainComp() {
  const [fiscalPeriodType, setFiscalPeriodType] = useState("year");

  //fetch
  const { isLoading, isError, data, refetch } = useQuery(
    "financialStatnmentsData",
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1.0/json/ir-api/financial-statements/:lang?fiscalPeriodType=${fiscalPeriodType}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data), {
    cacheTime: 500
  }
  );

  useEffect(() => {
    refetch();
  }, [fiscalPeriodType]);

  if (isLoading) {
    <div>...Loading</div>;
  }
  if (isError) {
    <div>...Error</div>;
  }

  return (
    <div className="financial-statments-main-comp">
      {console.log(data)}
      <div className="d-flex flex-row w-50 my-5">
        <div className="mx-2">
          <button
            className="btn btn-primary w-100 fw-bold"
            onClick={() => setFiscalPeriodType("year")}
          >
            Annual
          </button>
        </div>
        <div className="mx-2">
          <button
            className="btn btn-primary w-100 fw-bold"
            onClick={() => setFiscalPeriodType("quarter")}
          >
            Quarter
          </button>
        </div>
      </div>
      <Accordion content={data} type={fiscalPeriodType} />
    </div>
  );
}

export default FinancialStatmentsMainComp;
