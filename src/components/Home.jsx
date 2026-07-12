import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content text-center">
            <p className="hero-small-text">Welcome to</p>

            <h1 className="hero-title">Edom Restaurant</h1>

            <p className="hero-subtitle">
              Fresh Food • Great Taste • Memorable Moments
            </p>

            <Link
              to="/reservation"
              className="btn btn-warning btn-lg hero-button"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card shadow h-100 feature-card">
              <div className="card-body">
                <h3>🍽️ Fresh Food</h3>
                <p>
                  Prepared daily using fresh, high-quality ingredients.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 feature-card">
              <div className="card-body">
                <h3>👨‍🍳 Professional Chefs</h3>
                <p>
                  Experienced chefs preparing every meal with care.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 feature-card">
              <div className="card-body">
                <h3>⭐ Easy Reservations</h3>
                <p>
                  Reserve your table online quickly and easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container my-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>
                  “Amazing food and excellent customer service.”
                </p>
                <strong>— Mariamawit</strong>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>
                  “The reservation system was quick and easy to use.”
                </p>
                <strong>— Michael</strong>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>
                  “Beautiful atmosphere, fresh food, and friendly staff.”
                </p>
                <strong>— Elshaday</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;