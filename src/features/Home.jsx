import { Link } from "react-router-dom";
// import woods from "../CardData/data";
import WoodCard from "../components/molecules/WoodCard";
import './../global.css';


    function Homepage(){
        //  const featuredWoods = woods.slice(0,3);
        return(
            <>
           
             <section className="hero">

            <div className="hero-content">

                <p className="hero-subtitle">
                    🌿 Sustainable • Premium • Durable
                </p>

                <h1>
                    Discover Nature's
                    <span> Finest Woods</span>
                </h1>

                <p className="hero-text">
                    From luxurious teak to timeless oak,
                    explore the highest quality wood collection
                    for furniture, interiors and construction.
                </p>

                <div className="hero-buttons">

                    <Link to="/woods" className="btn-primary">
                        Explore Woods
                    </Link>

                    <Link to="/about" className="btn-secondary">
                        Learn More
                    </Link>

                </div>

            </div>

        </section>

        {/* Featured Woods */}

        {/* <section className="featured">

            <h2>Featured Collection</h2>

            <p className="Featured Collectionp">
                Handpicked premium woods trusted by
                architects and craftsmen.
            </p>

            <div className="woods-section">

                {
                    featuredWoods?.map((wood)=>(
                        <WoodCard
                            key={wood.id}
                            wood={wood}
                        />
                    ))
                }

            </div>

        </section> */}

       </>
       
        )
    }

      export default Homepage;