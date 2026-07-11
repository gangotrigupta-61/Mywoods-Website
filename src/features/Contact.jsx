import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

    function Contactpage(){
        return(
            <>
            {/* <h1>Contact</h1> */}
            <div className="contact-page">

    <div className="contact-title">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
    </div>

    <div className="contact-wrapper">

        <div className="contact-left">

            <h2>Get In Touch</h2>

            <p>
                Have questions about our premium wood collection?
                Send us a message and we'll get back to you soon.
            </p>

            <div className="contact-card">
                <FaPhoneAlt className="contact-icon" />
                <div>
                    <h4>Phone</h4>
                    <p>+91 9876543210</p>
                </div>
            </div>

            <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <div>
                    <h4>Email</h4>
                    <p>support@timbercraft.com</p>
                </div>
            </div>

            <div className="contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                    <h4>Address</h4>
                    <p>Lucknow, Uttar Pradesh</p>
                </div>
            </div>

        </div>

        <div className="contact-right">

            <form className="contact-form">

                <input type="text" placeholder="Your Name" />

                <input type="email" placeholder="Your Email" />

                <input type="text" placeholder="Subject" />

                <textarea placeholder="Your Message"></textarea>

                <button className="contact-btn">
                    Send Message
                </button>

            </form>

        </div>

    </div>

</div>
            
            </>
        )
    }

      export default Contactpage;