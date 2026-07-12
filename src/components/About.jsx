import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="container text-center text-white">
            <p className="about-small-title">Our Story</p>
            <h1 className="display-4 fw-bold">About Edom Restaurant</h1>
            <p className="lead">
              Fresh ingredients, warm hospitality, and memorable dining.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="container my-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200"
                alt="Inside Edom Restaurant"
                className="img-fluid rounded-4 shadow about-main-image"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <p className="about-section-label">Welcome to Edom Restaurant</p>

            <h2 className="mb-4">
              A place for delicious food and special moments
            </h2>

            <p>
              Edom Restaurant is a welcoming dining destination where guests
              can enjoy fresh, delicious meals in a warm and comfortable
              atmosphere.
            </p>

            <p>
              We prepare every dish with high-quality ingredients and care.
              Our goal is to provide excellent food, friendly service, and an
              unforgettable experience for every guest.
            </p>

            <p>
              Whether you are dining with family, meeting friends, or
              celebrating a special occasion, we are ready to make your visit
              memorable.
            </p>

            <Link
              to="/reservation"
              className="btn btn-warning btn-lg about-button"
            >
              Reserve Your Table
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="about-features py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="about-section-label">Why Choose Us?</p>
            <h2>What Makes Us Special</h2>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="about-feature-card h-100">
                <div className="about-icon">🥗</div>
                <h3>Fresh Ingredients</h3>
                <p>
                  We use fresh, high-quality ingredients to prepare every meal.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-feature-card h-100">
                <div className="about-icon">👨‍🍳</div>
                <h3>Professional Chefs</h3>
                <p>
                  Our experienced chefs create delicious dishes with passion.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-feature-card h-100">
                <div className="about-icon">⭐</div>
                <h3>Excellent Service</h3>
                <p>
                  Our friendly team works hard to give every guest great
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <h2>10+</h2>
                <p>Years of Experience</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <h2>5,000+</h2>
                <p>Happy Customers</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <h2>25+</h2>
                <p>Menu Items</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-box">
                <h2>4.9/5</h2>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;