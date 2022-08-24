import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../redux/dragons';
import Dragon from './Dragon';

const DragonsList = () => {
  const dragonsList = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, []);

  return (
    <div>
      {
        dragonsList.map((dragon) => (
          <div key={dragon.dragonsId}>
            <Dragon
              dragonId={dragon.dragonsId}
              type={dragon.type}
              name={dragon.name}
              flickrImages0={dragon.flickrImages0}
              dragonReserved={dragon.dragonReserved}
              description={dragon.description}
            />
          </div>
        ))
      }
    </div>
  );
};

export default DragonsList;
