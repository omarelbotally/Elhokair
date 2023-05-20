import React from "react";
import "./MilestonesSec.css";
import { useEffect } from "react";
import moment from "moment/moment";

function MilestonesSec(props) {
  useEffect(() => {
    console.log(props.content);
  }, [props.content]);
  return (
    <div className="milestones">
      <h3>Milestones</h3>
      <hr />
      {props?.content?.map((mileston, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-3">
              <p>{moment(mileston?.fullDate)?.format("DD/MM/YYYY")}</p>
            </div>
            <div className="col-md-9">
              <p>{mileston?.titleEn}</p>
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default MilestonesSec;
