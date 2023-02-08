import PropTypes from 'prop-types';

const Rocket = ({ title, description, image }) => (
  <div className="rocket d-flex align-start">
    <img className="rocket-image" src={image} alt={title} />
    <div className="title-desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
