import "./MajorShareholdersSec.css";
function MajorShareholdersSec(props) {
  return (
    <div className="major-shareholders">
      <h3 className="my-4">Subsidiaries&Associates</h3>
      <hr />
      <div className="row my-3">
        <div className="col-md-6">
          <h4>Company</h4>
        </div>
        <div className="col-md-3">
          <h4>Country</h4>
        </div>
        <div className="col-md-3 text-left">
          <h4 className="text-left">Percentage</h4>
        </div>
      </div>
      {props?.content?.map((diary, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-6 text-left">
              <p>{diary?.companyNameEn}</p>
            </div>
            <div className="col-md-3 text-left">
              <p>{diary?.countryNameEn}</p>
            </div>
            <div className="col-md-3 text-left">
              <p>{diary?.percentage}%</p>
            </div>
            <br />
            <br />
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default MajorShareholdersSec;
