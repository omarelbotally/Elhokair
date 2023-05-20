import axios from "axios";
//getToken
export const token = () => {
  axios
    .post("https://data.argaam.com/authenticate", {
      username: "ALHOKAIR_GROUP",
      password: "T44S21-PK4A51C4CF78967C857BE8F-X0007F-4Z",
    })
    .then((res) => {
      // console.log(res.data.jwtToken);
      localStorage.setItem("token", res.data.jwtToken);
    });
};
//fetchDate
export const fetchData = async (url) => {
  axios
    .get("https://data.argaam.com/api/v1.0/json" + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    });
};
//formatCurrency
export const formatter = (formatterNum) => {
  return formatterNum?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// isNegative
export const isNegative = (isNegNum) => {
  if (isNegNum > 0) {
    return <span className="text-success">{formatter(isNegNum)}</span>;
  } else if (isNegNum < 0) {
    return (
      <span className="text-danger">{`(${formatter(
        Math.abs(isNegNum)
      )})  `}</span>
    );
  }
};

// export default fetchData;
