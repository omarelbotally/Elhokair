import React, { useEffect, useState } from "react";
import "./Board.css";
import { useQuery } from "react-query";
import axios from "axios";
import ChairmanCard from "../../Components/BoardComps/ChairmanCard";
import Modal from "../../Components/GlobalComps/Modal/Modal";

function Board() {
  const { isLoading, isError, data } = useQuery(["Board"], () =>
    axios
      .get(
        "https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => res.data)
  );

  const [boardMembers, setBoardMem] = useState();

  const [chairman, setChairman] = useState();

  const [executives, setExecutives] = useState();

  useEffect(() => {
    console.log("t");
    setChairman(
      data?.individuals?.filter((v) => {
        return v?.positionNameEn === "Chairman of the Board";
      })
    );
    setExecutives(
      data?.individuals?.filter((v) => {
        return (
          v?.positionNameEn === "Chief Executive Officer / Manager " ||
          v?.positionNameEn === "Chief-Financial-Officer"
        );
      })
    );
    setBoardMem(
      data?.individuals?.filter((v) => {
        return (
          v?.positionNameEn !== "Chairman of the Board" &&
          v?.positionNameEn !== "Chief Executive Officer / Manager " &&
          v?.positionNameEn !== "Chief-Financial-Officer" &&
          v?.positionNameEn !== "Managing Director"
        );
      })
    );
  }, [data?.individuals]);

  const [curr, setCurr] = useState();

  if (isLoading) {
    return <div>is loading</div>;
  }
  if (isError) {
    return <div>is Error</div>;
  }
  return (
    <div className="board">
      <h3 className="my-3">
        Board&Managment-Abdulmohsin El hokair Group For Tourism And Development
      </h3>
      <hr />
      <h3>Board&Managment</h3>
      <hr />
      <div className="chairman">
        {chairman?.map((c, index) => {
          return (
            <div className="col-md-12" key={index} onClick={() => setCurr(c)}>
              <ChairmanCard content={c} />
            </div>
          );
        })}
      </div>
      <hr />
      <div className="board-members">
        <h3>Board Members</h3>
        <hr />
        <div className="row">
          {boardMembers?.map((member, index) => {
            return (
              <div
                className="col-md-6"
                key={index}
                onClick={() => setCurr(member)}
              >
                <ChairmanCard content={member} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="executives">
        <h3>Executives</h3>
        <hr />
        <div className="row">
          {executives?.map((exect, index) => {
            return (
              <div
                className="col-md-6"
                key={index}
                onClick={() => setCurr(exect)}
              >
                <ChairmanCard content={exect} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <Modal content={curr} />
    </div>
  );
}

export default Board;
