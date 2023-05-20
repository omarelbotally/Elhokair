import React from "react";
import "./MajorShareholders.css";
import ForeginOwnership from "../../Components/MajorShareholderComps/ForeignOwnership/ForeginOwnership";
import HistoricalChanges from "../../Components/MajorShareholderComps/HistoricalChanges/HistoricalChanges";

function MajorShareholders() {
  return (
    <div className="major-shareholders">
      <ForeginOwnership />
      <HistoricalChanges />
    </div>
  );
}

export default MajorShareholders;
