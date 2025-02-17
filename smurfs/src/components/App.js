import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchSmurfs,
  addSmurf,
  deleteSmurf,
  editSmurf
} from "../store/actions";

import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

import "./App.css";

const App = ({
  smurfs,
  fetchSmurfs,
  addSmurf,
  deleteSmurf,
  editSmurf,
  updatingSmurf
}) => {
  // const [smurfInfo, setSmurfInfo] = useState({});
  // const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchSmurfs();
  }, []);

  if (smurfs && addSmurf) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <SmurfsList
          /* setIsEditing={setIsEditing}
          setSmurfInfo={setSmurfInfo} */
          deleteSmurf={deleteSmurf}
          smurfs={smurfs}
        />
        <SmurfForm
          /* smurfInfo={smurfInfo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSmurfInfo={setSmurfInfo} */
          updatingSmurf={updatingSmurf}
          editSmurf={editSmurf}
          addSmurf={addSmurf}
        />
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
  { fetchSmurfs, addSmurf, deleteSmurf, editSmurf }
)(App);
