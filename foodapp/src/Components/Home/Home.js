import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../App";
import { UserDispatchContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranches } from "../../store/Reducer/Branches";
import About from "./About/About";
import Branches from "./Branches/Branches";
import DownloadApp from "./DownloadApp/DownloadApp";
import Queries from "./Queries/Queries";
import { STATUSES } from "../../store/Reducer/Branches";

const Home = () => {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.branch);
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBranches()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // If there is data, the form is valid
    setIsValid(userDetails ? true : false);
  }, [userDetails]);

  const navigateHome = () => {
    navigate("/Services");
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  const handleChange = (e) => {
    setUserDetails(e.target.value);
  };

  return (
    <div className="container1">
      <div className="container">
        <h1>Food Delivery</h1>
        <p>
          It's the food and groceries you <br></br>love, delivered
        </p>
        <img src={process.env.PUBLIC_URL + "static/Images/bg-2.jpg"} alt="" />
        <select
          className="custom-select"
          value={userDetails}
          onChange={handleChange}
        >     
          <option value="" defaultValue>
            Please Select Address
          </option>
          {data.BranchesFoodApp?.map(({ id, city }) => (
            <option value={id} key={`address-${id}`}>
              {city}
            </option>
          ))}
        </select>{" "}
        <button className="button1" disabled={!isValid} onClick={navigateHome}>
          Delivery
        </button>
        <span className="login-text">Select Location</span>
      </div>

      <About />
      <Branches data={data} />
      <DownloadApp />
      <Queries />
    </div>
  );
};

export default Home;
