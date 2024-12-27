import React from "react";
import { Card, Button, Row, Col, Carousel } from "react-bootstrap"; // Include Carousel here
import c3 from "./images/c3.jpg";
import c2 from "./images/c2.jpg";
import c1 from "./images/c1.jpg";
import j1 from "./images/j1.jpg";
import j2 from "./images/j2.jpg";
import j3 from "./images/j3.jpg";
import j4 from "./images/j4.jpg";
import i1 from "./images/i1.jpg";
import i2 from "./images/i2.jpg";
import i3 from "./images/i3.jpg";
import i4 from "./images/i4.jpg";
import a1 from "./images/a1.jpg";
import client1 from "./images/client1.jpg";
import client2 from "./images/client2.jpg";
import client3 from "./images/client3.jpg";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Home = () => {
  return (
    <>
      {/* Carousel Section */}
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="3000" // Automatically slide every 3 seconds
>
  <div className="carousel-inner">
    {/* Slide 1 */}
    <div className="carousel-item active">
      <img
        src={c3}
        className="d-block w-100"
        style={{ height: "500px", objectFit: "cover" }}
        alt="Slide 1"
      />
    </div>
    {/* Slide 2 */}
    <div className="carousel-item">
      <img
        src={c2}
        className="d-block w-100"
        style={{ height: "500px", objectFit: "cover" }}
        alt="Slide 2"
      />
    </div>
    {/* Slide 3 */}
    <div className="carousel-item">
      <img
        src={c1}
        className="d-block w-100"
        style={{ height: "500px", objectFit: "cover" }}
        alt="Slide 3"
      />
    </div>
  </div>

  {/* Carousel Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* Services Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          Our Services
        </h2>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <i
                  className="fas fa-shipping-fast mb-3"
                  style={{ fontSize: "3rem", color: "#4a90e2" }}
                ></i>
                <Card.Title>Home Delivery</Card.Title>
                <Card.Text>Get fresh groceries delivered to your doorstep.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <i
                  className="fas fa-store mb-3"
                  style={{ fontSize: "3rem", color: "#4caf50" }}
                ></i>
                <Card.Title>In-Store Pickup</Card.Title>
                <Card.Text>
                  Order online and pick up your groceries in-store.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <i
                  className="fas fa-tags mb-3"
                  style={{ fontSize: "3rem", color: "#ffc107" }}
                ></i>
                <Card.Title>Exclusive Discounts</Card.Title>
                <Card.Text>Enjoy amazing deals and discounts every day.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <i
                  className="fas fa-box mb-3"
                  style={{ fontSize: "3rem", color: "#e53935" }}
                ></i>
                <Card.Title>Product Packaging</Card.Title>
                <Card.Text>
                  Get your groceries packed securely for delivery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>



      {/* About Section */}
<div className="about-section">
  <div className="container my-5">
    <h2 className="text-center about-header">About Us</h2>
    <Row className="align-items-center" id="aboutrow">
      <Col md={6} className="about-img-container">
        <img
          src={a1}
          alt="About Fresho"
          className="about-img"
        />
      </Col>
      <Col md={6} className="about-content">
        <p>
          At Fresho, we are committed to bringing the freshest and highest-quality
          produce to your doorstep. Our mission is to support healthy and sustainable
          living by delivering farm-fresh vegetables and fruits. We partner with
          trusted farmers to ensure that our products are sourced responsibly and
          delivered with care.
        </p>
        <p>
          Whether you’re looking for organic produce, seasonal favorites, or exotic
          fruits, Fresho has something for everyone. Join us on our journey to make
          fresh groceries accessible to every household. Experience the difference of
          Fresho today!
        </p>
        <Button variant="success" className="about-btn">
          Learn More
        </Button>
      </Col>
    </Row>
  </div>
</div>




      {/* Cards Section */}
      <div className="containercard">
        <h2 className="category-header" style={{ fontWeight: "bold" }}>
          Our Products
        </h2>
        {/* Vegetables Section */}
        <h4 className="category-headers">VEGETABLES</h4>
        <div className="cards-container">
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={j1} />
                <Card.Body>
                  <Card.Title>Carrot</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={j2} />
                <Card.Body>
                  <Card.Title>Capsicum</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={j3} />
                <Card.Body>
                  <Card.Title>Brinjal</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={j4} />
                <Card.Body>
                  <Card.Title>Cabbage</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <h4 className="category-headers">FRUITS</h4>
        <div className="cards-container">
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={i1} />
                <Card.Body>
                  <Card.Title>Banana</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={i2} />
                <Card.Body>
                  <Card.Title>Pineapple</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={i3} />
                <Card.Body>
                  <Card.Title>Watermelon</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={i4} />
                <Card.Body>
                  <Card.Title>Pomegranate</Card.Title>
                  <Card.Text>
                    A brief description of the product goes here. Learn more about this
                    amazing product.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>






      {/* Gallery Section */}
<div className="gallery-section container my-5">
  <h2 className="text-center gallery-header">Gallery</h2>
  <div className="gallery-grid">
    <div className="gallery-item">
      <img src={j1} alt="Gallery Item 1" />
      <div className="overlay">
        <p>Fresh Carrots</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={j2} alt="Gallery Item 2" />
      <div className="overlay">
        <p>Green Capsicum</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={j3} alt="Gallery Item 3" />
      <div className="overlay">
        <p>Organic Brinjal</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={j4} alt="Gallery Item 4" />
      <div className="overlay">
        <p>Fresh Cabbage</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={i1} alt="Gallery Item 5" />
      <div className="overlay">
        <p>Sweet Bananas</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={i2} alt="Gallery Item 6" />
      <div className="overlay">
        <p>Juicy Pineapple</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={i3} alt="Gallery Item 7" />
      <div className="overlay">
        <p>Refreshing Watermelon</p>
      </div>
    </div>
    <div className="gallery-item">
      <img src={i4} alt="Gallery Item 8" />
      <div className="overlay">
        <p>Ripe Pomegranate</p>
      </div>
    </div>
  </div>
</div>





   {/* Customer Reviews Section */}
<section
  className="reviews-section my-5"
  style={{ backgroundColor: "#45a049", color: "#ffffff", padding: "40px", borderRadius: "10px" }}
>
  <div className="container">
    <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#ffffff" }}>
      Customer Reviews
    </h2>
    <Carousel indicators={false} interval={1000}>
      {/* Review 1 */}
      <Carousel.Item>
        <div className="text-center">
          <img
            src={client1} // Replace with actual customer image if available
            alt="Customer 1"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ffffff" }}
          />
          <h5 style={{ color: "#ffffff" }}>John Doe</h5>
          <p style={{ fontStyle: "italic", color: "#ffffff" }}>
            "Fresho's vegetables are the best! Always fresh, and the delivery is super fast. Highly recommend!"
          </p>
        </div>
      </Carousel.Item>

      {/* Review 2 */}
      <Carousel.Item>
        <div className="text-center">
          <img
            src={client2}
            alt="Customer 2"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ffffff" }}
          />
          <h5 style={{ color: "#ffffff" }}>Jane Smith</h5>
          <p style={{ fontStyle: "italic", color: "#ffffff" }}>
            "I love the organic fruits. They are juicy, flavorful, and responsibly sourced!"
          </p>
        </div>
      </Carousel.Item>

      {/* Review 3 */}
      <Carousel.Item>
        <div className="text-center">
          <img
            src={client3}
            alt="Customer 3"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ffffff" }}
          />
          <h5 style={{ color: "#ffffff" }}>Mike Johnson</h5>
          <p style={{ fontStyle: "italic", color: "#ffffff" }}>
            "Great quality at affordable prices. I am impressed by their commitment to sustainability."
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
</section>


        



{/*newsletter*/}
<section className="newsletter-section my-5">
  <div className="newsletter-container">
    <h2 className="newsletter-title">Stay Connected with Us</h2>
    <p className="newsletter-description">
      Subscribe to our newsletter to get exclusive content, offers, and the latest updates.
    </p>
    <div className="newsletter-form">
      <input
        type="email"
        className="newsletter-input"
        placeholder="Your email address"
        aria-label="Email address"
      />
      <button className="newsletter-btn">Subscribe</button>
    </div>
  </div>
</section>




      


<footer className="footer py-4" style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
  <div className="container text-center">
    <div className="row">
      <div className="col-md-4">
        <h5 style={{ color: "#ffffff" }}>About Us</h5>
        <p id="footp" style={{ color: "#ffffff" }}>
          Your online marketplace for fresh, organic produce delivered to your doorstep.
        </p>
      </div>
      <div className="col-md-4">
        <h5 style={{ color: "#ffffff" }}>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/products" className="text-white">Products</a></li>
          <li><a href="/login" className="text-white">Login</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5 style={{ color: "#ffffff" }}>Follow Us</h5>
        <ul className="social-links list-unstyled d-flex justify-content-center">
          <li>
            <a href="https://facebook.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr style={{ borderColor: "#ffffff" }} />
    <p id="footp" style={{ color: "#ffffff" }}>&copy;2024 FRESHO. All Rights Reserved.</p>
  </div>
</footer>









    </>
  );
};

export default Home;
