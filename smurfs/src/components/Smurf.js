import React from "react";

const Smurf = ({ smurf }) => {
  console.log(smurf);
  return (
    <div>
      <h3>{smurf.name}</h3>
    </div>
  );
};

export default Smurf;
