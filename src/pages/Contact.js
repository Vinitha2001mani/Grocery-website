import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section my-1">
      <div className="container">
        <h2 className="text-center contacts-title">Contact Us</h2>
        <p className="text-center contact-description" id="conp">
          We'd love to hear from you! Please fill out the form below, and we'll get in touch with you shortly.
        </p>
        <div className="contact-form">
          <form action="/submit-contact" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary" id="conbtn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
