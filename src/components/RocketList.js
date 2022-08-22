import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsApi } from '../redux/RocketSlice';
import RocketsCards from './RocketsCards';

function RocketsList() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRocketsApi());
  }, []);

  return (
    <>
      {rockets.map((rocket) => <RocketsCards key={rocket.rocketId} rocket={rocket} />)}
    </>
  );
}

export default RocketsList;
