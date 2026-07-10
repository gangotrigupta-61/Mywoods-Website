import { Link } from "react-router-dom";
import "../global.css";
    function Aboutpage(){
        return(
            <>
             {/* Hero */}

            <section className="about-hero">

                <div className="about-overlay">

                    <h1>About TimberCraft</h1>

                    <p>
                        Rooted in Nature • Crafted with Excellence
                    </p>

                </div>

            </section>


            {/* Story */}

            <section className="about-story">

                <div className="story-image">

                    <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                        alt="Wood Workshop"
                    />

                </div>

                <div className="story-content">

                    <h2>Our Story</h2>

                    <p>

                        TimberCraft began with a simple vision —
                        to bring the world's finest woods to
                        architects, designers, and craftsmen.

                    </p>

                    <p>

                        Every piece of timber we supply is
                        carefully selected for its strength,
                        beauty, and sustainability.

                    </p>

                    <p>

                        From handcrafted furniture to luxury
                        interiors, our woods help create
                        timeless masterpieces.

                    </p>

                </div>

            </section>


            {/* Mission */}

            <section className="mission">

                <div className="mission-card">

                    <h2>🌱 Our Mission</h2>

                    <p>

                        Deliver premium-quality wood while
                        protecting forests through sustainable
                        sourcing and responsible practices.

                    </p>

                </div>

                <div className="mission-card">

                    <h2>🌍 Our Vision</h2>

                    <p>

                        To become the world's most trusted
                        supplier of sustainable hardwood and
                        premium timber.

                    </p>

                </div>

            </section>


            {/* Why Choose */}

            <section className="choose">

                <h2>Why TimberCraft?</h2>

                <div className="choose-grid">

                    <div className="choose-card">
                        🪵
                        <h3>Premium Hardwood</h3>
                        <p>Carefully selected wood with unmatched durability.</p>
                    </div>

                    <div className="choose-card">
                        🌳
                        <h3>Sustainable Forests</h3>
                        <p>Ethically sourced timber that protects nature.</p>
                    </div>

                    <div className="choose-card">
                        ⭐
                        <h3>Trusted Quality</h3>
                        <p>Preferred by architects and furniture makers.</p>
                    </div>

                    <div className="choose-card">
                        🚚
                        <h3>Worldwide Delivery</h3>
                        <p>Reliable shipping and secure packaging.</p>
                    </div>

                </div>

            </section>


            {/* Values */}

            <section className="values">

                <h2>Our Core Values</h2>

                <div className="values-container">

                    <div>
                        <h3>Integrity</h3>
                        <p>Honest sourcing and transparent pricing.</p>
                    </div>

                    <div>
                        <h3>Innovation</h3>
                        <p>Modern solutions for timeless materials.</p>
                    </div>

                    <div>
                        <h3>Craftsmanship</h3>
                        <p>Precision and perfection in every product.</p>
                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="about-cta">

                <h2>Build Something Timeless</h2>

                <p>

                    Explore our premium collection of woods
                    and bring your ideas to life.

                </p>

                <Link
                    className="btn-primary"
                    to="/woods"
                >
                    Explore Collection
                </Link>

            </section>
            </>
        )
    }

      export default Aboutpage;