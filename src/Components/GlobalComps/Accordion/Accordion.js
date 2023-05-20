import React from "react";
import "./Accordion.css";
import { isNegative } from "../../../Services/services";
import moment from "moment/moment";
function Accordion(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr className="fw-bold">
              <td className="w-25">Details</td>
              <td>Chart</td>
              <td>MillionSAR</td>
              <td>MillionSAR</td>
              <td>MillionSAR</td>
              <td>MillionSAR</td>
              <td>MillionSAR</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td> {props.type === "quarter" ? moment(props.content?.tabs[0]?.fields[0]?.values[0]?.forDate).format("DD/MM/yyyy") : props.content?.tabs[0]?.fields[0]?.values[0]?.forYear}</td>
              <td>  {props.type === "quarter" ? moment(props.content?.tabs[0]?.fields[0]?.values[1]?.forDate).format("DD/MM/yyyy") : props.content?.tabs[0]?.fields[0]?.values[1]?.forYear}</td>
              <td>{props.type === "quarter" ? moment(props.content?.tabs[0]?.fields[0]?.values[2]?.forDate).format("DD/MM/yyyy") : props.content?.tabs[0]?.fields[0]?.values[2]?.forYear}</td>
              <td> {props.type === "quarter" ? moment(props.content?.tabs[0]?.fields[0]?.values[3]?.forDate).format("DD/MM/yyyy") : props.content?.tabs[0]?.fields[0]?.values[3]?.forYear}</td>
              <td> {props.type === "quarter" ? moment(props.content?.tabs[0]?.fields[0]?.values[4]?.forDate).format("DD/MM/yyyy") : props.content?.tabs[0]?.fields[0]?.values[4]?.forYear}</td>

            </tr>


            {props.content?.tabs?.map((tab, tabIndex) => {
              return (
                <React.Fragment key={tabIndex}>
                  <tr
                    key={tabIndex}
                    data-bs-toggle="collapse"
                    data-bs-target={"#flush-collapse-" + tabIndex}
                    aria-expanded="true"
                    aria-controls={"flush-collapse-" + tabIndex}
                    className="fw-bold"
                  >
                    <td colSpan={7} >+ &nbsp; {tab.tabNameEn}</td>
                  </tr>
                  {tab?.fields?.map((t, tIndex) => {
                    return (
                      <tr
                        key={tIndex}
                        id={"flush-collapse-" + tabIndex}
                        className="accordion-collapse collapse hide"
                        data-bs-parent="#accordionFlushExample"
                        data-mdb-toggle="animation"
                        data-mdb-animation-reset="true"
                        data-mdb-animation="slide-out-right"
                      >


                        <td>{t.displayNameEn}</td>
                        <td>
                          <img
                            src={require("../../../Assets/chart-icon.png")}
                            alt="chart-icon"
                          />
                        </td>
                        <td>{isNegative(t.values[0].value) || "--"}</td>
                        <td>{isNegative(t.values[1].value) || "--"}</td>
                        <td>{isNegative(t.values[2].value) || "--"}</td>
                        <td>{isNegative(t.values[3].value) || "--"}</td>
                        <td>{isNegative(t.values[4].value) || "--"}</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Accordion;
