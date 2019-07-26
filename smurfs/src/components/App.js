import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../store/actions";

import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

import "./App.css";

const App = ({ smurfs, fetchSmurfs, addSmurf }) => {
  useEffect(() => {
    fetchSmurfs();
  }, []);

  if (smurfs && addSmurf) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <SmurfsList smurfs={smurfs} />
        <SmurfForm addSmurf={addSmurf} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
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
  { fetchSmurfs, addSmurf }
)(App);
