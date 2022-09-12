import React from "react";
import "./Branches.css";
import { useEffect } from "react";
import { fetchBranches } from "../../../store/Reducer/Branches";
import { useDispatch, useSelector } from "react-redux";
import BranchesItem from "./BranchesItem";
const Branches = () => {
  const data = useSelector((state) => state.branch.data.BranchesFoodApp);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBranches());// eslint-disable-next-line 
  }, []);
  return (
    <div className="branches">
      <h1>Find us in these cities and many more!</h1>

      <section className="main-card--cointainer">
        {data.map((curElem) => {
          const { id, city, image } = curElem;
          return <BranchesItem id={id} city={city} image={image} />;
        })}
      </section>
    </div>
  );
};

export default Branches;
