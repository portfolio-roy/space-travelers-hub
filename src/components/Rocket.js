import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rocket';

const Rocket = ({
  id, title, description, image, reserved, reservedtext,
}) => {
  const dispatch = useDispatch();
  const bookingHandler = () => {
    dispatch(bookRocket(id));
  };
  return (
    <div className="rocket d-flex align-start">
      <img className="rocket-image" src={image} alt={title} />
      <div className="rocket-info d-flex flex-column">
        <h3 className="rocket-title">
          {title}

        </h3>

        <p className="rocket-description">
          <span className={reserved ? 'reserved' : 'not-reserved'}>{reservedtext}</span>

          {description}
        </p>
        <button className={reserved ? 'cancelled' : 'booked'} type="button" onClick={bookingHandler}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  reservedtext: PropTypes.string.isRequired,
};

export default Rocket;
