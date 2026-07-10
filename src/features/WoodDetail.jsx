import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function WoodDetail() {
  const { id } = useParams();

  const [wood, setWood] = useState(null);

  useEffect(() => {
    fetch(`https://mywoods-api.onrender.com/api/woods/${id}`)
      .then((res) => res.json())
      .then((data) => setWood(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!wood) return <h2>Loading...</h2>;

  return (
    <section className="woods-section">
      <div className="wood-card">

        {/* Keep this div so your existing CSS works */}
        <div className="wood-image">
          {/* Add image later */}
          <img src={wood.image} alt={wood.name} />
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
            <p>
              <strong>Status:</strong>{" "}
              {wood.available ? "Available" : "Out of Stock"}
            </p>
          </div>

          <div className="bottom">
            <h3>₹ {wood.pricePerUnit}</h3>

            <Link className="explore-btn" to="/woods">
              ← Back
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WoodDetail;