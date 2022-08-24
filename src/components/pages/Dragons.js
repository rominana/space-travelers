import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import '../styles/Dragons.css';
import DragonsList from '../DragonList';

const Dragons = () => {
  const DragonList = useSelector((state) => state.dragons);

  return (
    <>
      <DragonsList dragonsList={DragonList} />
    </>
  );
};

export default Dragons;
