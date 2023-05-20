import React from "react";
import "./NegotiatedDealMainComp.css";
import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import "./NegotiatedDealMainComp.css";
import { formatter, isNegative } from "../../../Services/services";

function NegotiatedDealsMainComp() {
  const fiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 10));

  const [value, setValue] = useState([
    dayjs(moment(fiveDaysAgo)?.format("YYYY-MM-DD")),
    dayjs(moment().format("YYYY-MM-DD")),
  ]);

  //Fetching
  const { isLoading, isError, data, refetch } = useQuery(["NegDeals"], () =>
    axios
      .get(`https://data.argaam.com/api/v1/json/ir-widget/negotiated-deals`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );

  //reFetch

  useEffect(() => {
    refetch();
  }, [value]);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (isError) {
    return <div>...Error</div>;
  }
  return (
    <div className="negotiated-deals-maincomp">
      {console.log(data)}
      {/* <div className="date-input d-flex flex-row align-items-center justify-content-evenly">
      
        <h5>Filter By Date:</h5>
        <div>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: "START DATE", end: "END DATE" }}
          >
            <DateRangePicker
              slots={{ field: SingleInputDateRangeField }}
              value={value}
              onChange={(newValue) => {
                setValue([
                  moment(newValue[0].$d).format("YYYY-MM-DD"),
                  moment(newValue[1].$d).format("YYYY-MM-DD"),
                ]);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
              className="range-inp"
            />
          </LocalizationProvider>
        </div>
      </div> */}

      {/* Table To Be Filtered */}

      <h3 className="my-4">{data.companyNameEn}</h3>
      <hr />
      <div className="table-responsive py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Market Price</th>
              <th scope="col">Negotiated Price</th>
              <th scope="col">Negotiated Market Price</th>
              <th scope="col">Volume Traded</th>
              <th scope="col">Value Traded</th>
            </tr>
          </thead>

          <tbody>
            {data.deals.map((deal, dealIndex) => {
              return (
                <tr key={dealIndex}>
                  <td className="ch-color">
                    {moment(deal.date).format("DD/MM/YYYY")}
                  </td>
                  <td>{formatter(deal.marketPrice)}</td>
                  <td>{formatter(deal.negotiatedPrice)}</td>
                  <td>{isNegative(deal.negotiatedToMarketprice)}</td>
                  <td>{formatter(deal.valueTraded)} </td>
                  <td>{formatter(deal.volumeTraded)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NegotiatedDealsMainComp;
