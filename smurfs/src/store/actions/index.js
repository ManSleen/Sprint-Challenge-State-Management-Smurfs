import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";

export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSmurf = values => dispatch => {
  console.log(values);
  dispatch({ type: ADD_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", values)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
