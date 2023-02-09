import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAsync } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missions);
  const { status, missions } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMissionsAsync());
    }
  }, [dispatch, status]);

  console.log(missions);
};

export default Missions;
