/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const {
    id, name, description, reserved,
  } = mission;

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {reserved ? (
          <button type="submit" className="status">
            Active Member
          </button>
        ) : (
          <button type="submit" className="status">
            Not a Member
          </button>
        )}
      </td>
      <td>
        {reserved ? (
          <button type="button">Leave Mission</button>
        ) : (
          <button type="button">Join Mission</button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
