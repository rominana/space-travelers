import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { reserveDragon, cancelDragonReserve } from '../redux/dragons';

const Dragon = (props) => {
  const {
    dragonId, name, type, flickrImages0, dragonReserved, description,
  } = props;

  const dispatch = useDispatch();

  const reserve = (e) => {
    const buttonId = e.target.id;
    dispatch(reserveDragon(buttonId));
  };

  const cancelReservation = (e) => {
    const buttonId = e.target.id;
    dispatch(cancelDragonReserve(buttonId));
  };

  return (
    <div className="dragon-container container">
      <img className="dragon-container-img" src={flickrImages0} alt="" />
      <div className="dragon-info">
        <h2 className="dragon-info-title">{name}</h2>
        <span className="dragon-info-span">
          {dragonReserved === true && (<div className="reserved">Reserved</div>)}
          {type}
        </span>
        <p className="dragon-info-description">
          {description}
        </p>
        {dragonReserved === true
          ? (<button type="button" className="dragon-info-button dragon-cancel-reserve" onClick={cancelReservation} id={dragonId}>Cancel Dragon Reservation</button>)
          : (<button type="button" className="dragon-info-button dragon-reserve" onClick={reserve} id={dragonId}>Reserve Dragon</button>)}
      </div>
    </div>
  );
};

Dragon.propTypes = {
  dragonId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImages0: PropTypes.string.isRequired,
  dragonReserved: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dragon;
