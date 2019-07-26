import React from "react";

const Smurf = ({ smurf, deleteSmurf }) => {
  console.log(smurf);
  return (
    <div>
      <h3>{smurf.name}</h3>
      <h4>Age: {smurf.age}</h4>
      <h4>Height: {smurf.height}</h4>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
    </div>
  );
};

export default Smurf;
