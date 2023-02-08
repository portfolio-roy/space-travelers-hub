import { createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'space-travelers-hub/missions/fetchMissions';

const initialState = [];

export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await fetch(MISSIONS_URL);
  const { data } = await response.json();
  const missions = data.map((mission) => ({
    name: mission.mission_name,
    id: mission.mission_id,
    description: mission.description,
    membership: true,
  }));
  console.log('From store', missions);
  // return missions;
});

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...state, action.payload];
    default:
      return state;
  }
}
