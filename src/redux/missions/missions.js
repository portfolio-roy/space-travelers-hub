/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];
const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_MISSIONS';

const getMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  const missions = data.map(({ mission_name, mission_id, description }) => ({
    name: mission_name,
    id: mission_id,
    description,
    reserverd: false,
  }));
  console.log(missions);
  // return missions;
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [state, ...(action.payload || [])];
    default:
      return state;
  }
};

// const getAllMissions = async () => {
//   let payload;
//   try {
//     const response = await fetch(baseURL);
//     const missions = await response.json();
//     payload = missions.map((mission) => ({
//       id: mission.mission_id,
//       name: mission.mission_name,
//       description: mission.description,
//     }));
//     console.log(missions);
//   } catch (error) {
//     return error;
//   }
//   return payload;
// };

// const missionsService = {
//   getAllMissions,
// };

// const FETCH_MISSIONS = 'FETCH_MISSIONS';
// const JOIN_MISSION = 'JOIN_MISSION';

// const initialState = {
//   status: 'idle',
//   missions: [],
// };

// const missionsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_MISSIONS:
//       return {
//         ...state,
//         status: 'succeeded',
//         missions: action.payload,
//       };

//     case JOIN_MISSION: {
//       const clone = [...state.missions];
//       const updatedMissions = clone.map((item) => {
//         if (item.id !== action.payload.id) {
//           return item;
//         }
//         return { ...item, isReserved: !item.isReserved };
//       });

//       return {
//         ...state,
//         missions: updatedMissions,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const getMissionsAsync = createAsyncThunk(
//   FETCH_MISSIONS,
//   async (arg, thunkAPI) => {
//     const payload = await missionsService.getAllMissions();
//     thunkAPI.dispatch({ type: FETCH_MISSIONS, payload });
//   },
// );

// export const joinMission = (payload) => ({
//   type: JOIN_MISSION,
//   payload,
// });
export { getMissions };
export default missionsReducer;
