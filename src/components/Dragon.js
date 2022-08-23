import PropTypes from 'prop-types';

const Dragon = (props) => {
  const {
    id, name, type, flickrImages0,
  } = props;

  return (
    <div className="dragon-container container" id={id}>
      <img className="dragon-container-img" src={flickrImages0} alt="" />
      <div className="dragon-info">
        <h2 className="dragon-info-title">{name}</h2>
        <p className="dragon-info-description">
          {type}
        </p>
        <button type="button" className="dragon-info-button">Reserve Dragon</button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImages0: PropTypes.string.isRequired,
};

export default Dragon;
