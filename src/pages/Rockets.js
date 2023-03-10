import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { fetchRockets } from '../redux/rockets/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rockets);
  const { status, rockets } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status]);
  return (
    <main className="d-flex flex-column align-center col-md-12">
      <div className="container rockets d-flex flex-column">
        {rockets.map((rocket) => (
          <Rocket
            image={rocket.image}
            key={rocket.id}
            title={rocket.name}
            description={rocket.description}
            id={rocket.id}
            reservedtext={rocket.reserved ? 'Reserved' : ''}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    </main>
  );
};

export default Rockets;
