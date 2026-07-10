import "../../global.css";
import { Link } from "react-router-dom";


function WoodCard({ wood }) {
  return (
    <div className="wood-card">

      {/* <div className="wood-image">
        <img src={wood.image} alt={wood.name} />
        <span className="rating">⭐ {wood.rating}</span>
      </div>

      <div className="wood-content">

        <h2>{wood.name}</h2>

        <p className="scientific-name">
          {wood.scientificName}
        </p>

        <div className="details">
          <p><strong>Origin:</strong> {wood.origin}</p>
          <p><strong>Category:</strong> {wood.category}</p>
          <p><strong>Hardness:</strong> {wood.hardness}</p>
        </div>

        <div className="bottom">

          <h3>₹ {wood.price}</h3>

          <Link
            className="explore-btn"
            to={`/woods/${wood.id}`}
          >
            Explore →
          </Link>

        </div>
      </div> */}


      {/* Image placeholder (add later) */}
      <div className="wood-image">

        <img src={wood.image} alt={wood.name} />
        
        <span className="rating">
          {wood.available ? "✅ Available" : "❌ Out of Stock"}
        </span>
      </div>

      <div className="wood-content">

        <h2>{wood.name}</h2>

        <p className="scientific-name">
          {wood.type}
        </p>

        <div className="details">
          <p><strong>Origin:</strong> {wood.origin}</p>
          <p><strong>Color:</strong> {wood.color}</p>
          <p><strong>Density:</strong> {wood.density}</p>
          <p><strong>Description:</strong> {wood.description}</p>
        </div>

        <div className="bottom">

          <h3>₹ {wood.pricePerUnit}</h3>

          <Link
            className="explore-btn"
            to={`/woods/${wood._id}`}
          >
            Explore →
          </Link>

        </div>

      </div>

    </div>
    
 
  );
}

export default WoodCard;