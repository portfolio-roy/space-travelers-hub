import { createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'space-travelers-hub/missions/fetchMissions';

const initialState = [];

// Add reducer
export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { name, description } = action.payload[key][0];
        return {
          item_id: key,
          name,
          description,
        };
      });
    default:
      return state;
  }
}
