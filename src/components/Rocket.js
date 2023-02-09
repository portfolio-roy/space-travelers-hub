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
      <div className="title-desc">
        <h3>{title}</h3>
        <p>
          <span id={reserved ? 'reserved' : 'not-reserved'}>{reservedtext}</span>
          {description}
        </p>
        <button id="booking" type="button" onClick={bookingHandler}>Reserve Rocket</button>
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
