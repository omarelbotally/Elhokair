import React from "react";
import "./BasicInfoSec.css";

function BasicInfoSec(props) {
  return (
    <div className="basic-info">
      <h3>Basic Information</h3>
      <hr />
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between my-2">
          <div>City:</div>
          <div>{props?.content?.cityNameEn}</div>
        </div>
        <div className="col-md-12 d-flex justify-content-between my-2">
          <div>Websit:</div>
          <div>{props?.content?.websiteURL}</div>
        </div>
        <div className="col-md-12 d-flex justify-content-between my-2">
          <div>Email:</div>
          <div>{props?.content?.email}</div>
        </div>
        <div className="col-md-12 d-flex justify-content-between my-2">
          <div>Phone:</div>
          <div>{props?.content?.phone}</div>
        </div>
        <div className="col-md-12 d-flex justify-content-between my-2">
          <div>Fax:</div>
          <div>{props?.content?.fax}</div>
        </div>
        <div className="col-md-12 d-flex justify-content-between my-2">
          <div>PO Box:</div>
          <div>{props?.content?.poBoxEn}</div>
        </div>
        <div className="col-md-12 row my-2">
          <div className="w-50">Address:</div>
          <div className="w-50">{props?.content?.addressEn}</div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfoSec;
