import React from "react";
import "./Branches.css";


import BranchesItem from "./BranchesItem";

const Branches = ({data}) => {
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
