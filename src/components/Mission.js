/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ name, description, reserved }) => (
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

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
