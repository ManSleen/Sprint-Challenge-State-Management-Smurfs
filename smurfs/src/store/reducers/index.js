import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  isLoading: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: "",
        smurfs: []
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        smurfs: [...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
