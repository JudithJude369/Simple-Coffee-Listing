import starFill from "@/assets/images/Star_fill.svg";
import star from "@/assets/images/Star.svg";

const Card = ({ name, image, price, rating, votes, popular, available }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="label-wrapper">
        <p>{name} </p>
        <button>{price}</button>
      </div>
      <div className="star-wrapper">
        {rating ? (
          <>
            <img src={starFill} alt="" />
            <div className="votes">
              <p className="rating">{rating}</p>
              <p>({votes} votes)</p>
            </div>
          </>
        ) : (
          <div className="star-wrapper">
            <img src={star} alt="" />
            <p style={{ color: "#4d5562" }}>No ratings</p>
          </div>
        )}
        {available ? "" : <p className="sold-out">Sold out</p>}
      </div>
      {popular && <p className="popular">popular</p>}
    </div>
  );
};

export default Card;
