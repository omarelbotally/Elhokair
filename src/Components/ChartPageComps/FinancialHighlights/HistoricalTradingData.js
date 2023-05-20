import React, { useEffect, useState } from "react";
// ** Import Use Translation
import axios from "axios";
import moment from "moment";
import "./HistoricalTradingData.css";
import { useQuery } from "react-query";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import { isNegative } from "../../../Services/services";

const fiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 10));

function HistoricalTradingData() {
  const [value, setValue] = useState([
    dayjs(moment(fiveDaysAgo)?.format("YYYY-MM-DD")),
    dayjs(moment().format("YYYY-MM-DD")),
  ]);

  //Fetching
  const { isLoading, isError, data, refetch } = useQuery(
    ["HistoricalData"],
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1/json/ir-api/chart-data-table/${value[0]}/${value[1]}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data.chartsData)
  );

  useEffect(() => {
    refetch();
  }, [value]);

  if (isLoading) {
    return <div>is Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="Historical-Trading-Data">
      <div className="container-md">
        <div className="date-input d-flex flex-row align-items-center justify-content-evenly">
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
        </div>

        {/* Table To Be Filtered */}

        <h3 className="my-4">HistoricalTradingData</h3>
        <hr />

        <div className="table-responsive py-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Change</th>
                <th scope="col">Change (%)</th>
                <th scope="col">Volume</th>
                <th scope="col">TurnOver</th>
                <th scope="col">Open</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
              </tr>
            </thead>

            <tbody>
              {data.reverse().map((h, idx) => {
                return (
                  <tr key={idx}>
                    <td className="ch-color">
                      {moment(h.forDate).format("DD/MM/YYYY")}
                    </td>
                    <td>{isNegative(Number(h.close)) || "-"}</td>
                    <td>{isNegative(Number(h.change)) || "-"}</td>
                    <td>{isNegative(Number(h.percentageChange)) || "-"}</td>
                    <td>
                      {h.volume.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>
                      {h.amount.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>{isNegative(Number(h.open)) || "-"}</td>
                    <td>{isNegative(Number(h.max)) || "-"}</td>
                    <td>{isNegative(Number(h.min)) || "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HistoricalTradingData;
