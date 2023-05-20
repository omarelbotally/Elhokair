import React, { useEffect } from "react";
import "./Modal.css";

function Modal(props) {
  useEffect(() => {
    console.log(props.content);
  }, [props.content]);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                {props?.content?.nameEn}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="highlights">
                <p>highlights</p>
                <hr />
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.content?.resumeHighLightEn,
                  }}
                  className="html-converted-txt"
                />
              </div>
              <div className="position-history">
                <p>Key Dates</p>
                <hr />
                <div className="row">
                  <div className="col-md-3">CompanyName</div>
                  <div className="col-md-3">CompanyPos</div>
                  <div className="col-md-3">Started On</div>
                  <div className="col-md-3">Ended On</div>
                </div>
                <br />

                {props.content?.positionHistory.map((history, historyIndex) => {
                  return (
                    <div className="row" key={historyIndex}>
                      <div className="col-md-3 my-2">
                        {history?.companyNameEn}
                      </div>
                      <div className="col-md-3 my-2">
                        {history?.positionNameEn}
                      </div>
                      <div className="col-md-3 my-2">
                        {history?.startedOn || "--"}
                      </div>
                      <div className="col-md-3 my-2">
                        {history?.endedOn || "--"}
                      </div>
                      <br />
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
