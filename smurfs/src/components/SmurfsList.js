import React, { useEffect } from "react";

import Smurf from "./Smurf";

const SmurfsList = ({ smurfs, deleteSmurf }) => {
  console.log(smurfs);
  if (smurfs) {
    return (
      <div>
        <h1>Smurfs List Yo!</h1>
        {smurfs.map(smurf => (
          <Smurf deleteSmurf={deleteSmurf} smurf={smurf} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default SmurfsList;
