import planet from '../assets/images/planet.png';

const Dragon = () => (
  <div className="dragon-container container">
    <img className="dragon-container-img" src={planet} alt="" />
    <div className="dragon-info">
      <h2 className="dragon-info-title">Dragon&apos;s Name</h2>
      <p className="dragon-info-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid placeat ipsa deserunt fugit
        , consequatur quae, ad vero perspiciatis nesciunt fugiat magnam iusto aut suscipit impedit
        molestiae modi corporis tempora pariatur?
      </p>
      <button type="button" className="dragon-info-button">Reserve Dragon</button>
    </div>
  </div>
);

export default Dragon;
