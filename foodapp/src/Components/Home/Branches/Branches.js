import React from "react";
import "./Branches.css";
import { useEffect } from "react";
import { fetchBranches, STATUSES } from "../../../store/Reducer/Branches";
import { useDispatch, useSelector } from "react-redux";
import BranchesItem from "./BranchesItem";

const Branches = () => {
  const { data, status } = useSelector((state) => state.branch);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBranches()); // eslint-disable-next-line
  }, []);
  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="branches">
      <h1>Find us in these cities and many more!</h1>

      <section className="main-card--cointainer">
        {data.BranchesFoodApp?.map(({ id, city, image }) => (
          <div key={`branches-${id}`}>
            {" "}
            <BranchesItem id={id} city={city} image={image} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Branches;
