import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocket';

const Profile = () => {
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
      <div className="container d-flex flex-column align-center">
        <div className="col-md-8 col-sm-12 d-flex">
          <div className="my-missions col-md-6 col-sm-12 d-flex flex-column">
            <h3>My Missions</h3>
          </div>
          <div className="my-rockets col-md-6 col-sm-12 d-flex flex-column">
            <h3>My Rockets</h3>
            <div className="rocket-list d-flex flex-column col-md-12">
              {
              rockets.filter((rocket) => (
                rocket.reserved === true
              )).map((rocket) => (
                <div className="rocket-card d-flex align-center" key={rocket.id}>
                  <img className="rocket-image" src={rocket.image} alt={rocket.name} />
                  <h4>{rocket.name}</h4>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};

export default Profile;
