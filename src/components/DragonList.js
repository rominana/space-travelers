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
          <div key={dragon.id}>
            <Dragon
              id={dragon.id}
              type={dragon.type}
              name={dragon.id}
              flickrImages0={dragon.flickr_images[0]}
            />
          </div>
        ))
      }
    </div>
  );
};

export default DragonsList;
