import React, { useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../../store/Reducer/Addresses";
import About from "./About/About";
import Branches from "./Branches/Branches";
import DownloadApp from "./DownloadApp/DownloadApp";
import Queries from "./Queries/Queries";
import { STATUSES } from "../../store/Reducer/Addresses";

const Home = () => {
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAddresses()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/Services");
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="container1">
      <div className="container">
        <h1>Food Delivery</h1>
        <p>
          It's the food and groceries you <br></br>love, delivered
        </p>
        <img src={process.env.PUBLIC_URL + "static/Images/bg-2.jpg"} alt="" />
        <select className="custom-select">
          <option value="" defaultValue>
            Choose your option
          </option>
          {data.Addresses &&
            data.Addresses.map((cur) => {
              const { id, address } = cur;
              return (
                <option value="choose" key={id}>
                  {address}
                </option>
              );
            })}
        </select>{" "}
        <button className="button1" onClick={navigateHome}>Delivery</button>
        <span className="login-text">Select Location</span>
      </div>
      <About />
      <Branches />
      <DownloadApp />
      <Queries />
    </div>
  );
};

export default Home;
