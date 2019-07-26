import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../store/actions";

import Smurf from "./Smurf";

const SmurfsList = ({ smurfs, fetchSmurfs }) => {
  useEffect(() => {
    fetchSmurfs();
  }, []);

  console.log(smurfs);
  if (smurfs) {
    return (
      <div>
        <h1>Smurfs List Yo!</h1>
        {smurfs.map(smurf => (
          <Smurf smurf={smurf} />
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

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    isLoading: state.isLoading,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsList);
