import React from "react";
import "./Profile.css";
import { useQuery } from "react-query";
import axios from "axios";
import BusinessSec from "../../Components/ProfileComps/BusinessSec/BusinessSec";
import OverviewSec from "../../Components/ProfileComps/OverviewSec/OverviewSec";
import BasicInfoSec from "../../Components/ProfileComps/BasicInfoSec/BasicInfoSec";
import ClassificationSec from "../../Components/ProfileComps/ClassificationSec/ClassificationSec";
import FinancialHighlightsSec from "../../Components/ProfileComps/FinancialHighlightsSec/FinancialHighlightsSec";
import TradingDataSec from "../../Components/ProfileComps/TradingDataSec/TradingDataSec";
import StockInfoSec from "../../Components/ProfileComps/StockInfoSec/StockInfoSec";
import MajorShareholdersSec from "../../Components/ProfileComps/MajorShareholdersSec/MajorShareholdersSec";
import MilestonesSec from "../../Components/ProfileComps/MilestonesSec/MilestonesSec";

function Profile() {
  const { isLoading, isError, data } = useQuery(["myData"], () =>
    axios
      .get("https://data.argaam.com/api/v1.0/json/ir-api/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );

  if (isLoading) {
    return <div>is Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="profile-page">
      <BusinessSec content={data?.profileInfo?.overviewEn} />
      <OverviewSec content={data?.profileInfo?.summaryEn} />
      <div className="row">
        <div className="col-md-6 my-5">
          <BasicInfoSec content={data?.profileInfo} />
        </div>
        <div className="col-md-6 my-5">
          <ClassificationSec />
        </div>

        <hr />
      </div>
      <FinancialHighlightsSec />
      <div className="row my-5">
        <div className="col-md-6">
          <TradingDataSec content={data?.tradingData} />
        </div>
        <div className="col-md-6">
          <StockInfoSec content={data?.stockInfo} />
        </div>
        <hr />
      </div>

      <MajorShareholdersSec content={data?.subsidiaries} />
      <MilestonesSec content={data?.milestones} />
    </div>
  );
}

export default Profile;
