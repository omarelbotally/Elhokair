import "./chairman-card.css";

function ChairmanCard(props) {
  // useEffect(() => {
  //   console.log(props.content);
  // }, [props.content]);
  // const handleShowModal = (item) => {
  //   setItem(item);
  // };

  return (
    <>
      <div
        className="chairman-card d-flex flex-row my-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      // onClick={() => handleShowModal(props.content)}
      >
        <div className="chairman-img">
          <img
            src={props.content.profilePicURL}
            className="profile-img"
            alt="chairman"
            id="chairman-img"
          />
        </div>
        <div className="chairman-card-data d-flex flex-column">
          <div className="person-info w-100">
            <p className="person-name chairman-name">{props.content.nameEn}</p>

            <p className="person-position">{props.content.positionNameEn}</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default ChairmanCard;
