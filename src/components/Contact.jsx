import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setStatus("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message failed.");
      }

      setStatus(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Message failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="container text-center text-white">
            <p className="contact-small-title">Get in Touch</p>
            <h1 className="display-4 fw-bold">Contact Edom Restaurant</h1>
            <p className="lead">
              We would love to help with reservations, special events, and
              questions.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <p className="contact-section-label">We’re Here for You</p>
          <h2>Visit, Call, or Message Us</h2>
          <p className="text-muted">
            Our team is ready to make your dining experience special.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="contact-info-card h-100 text-center">
              <div className="contact-icon">📍</div>
              <h4>Address</h4>
              <p>574 Main Street</p>
              <p>Washington, DC</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="contact-info-card h-100 text-center">
              <div className="contact-icon">📞</div>
              <h4>Phone</h4>
              <p>(537) 625-4538</p>
              <p>Call us anytime</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="contact-info-card h-100 text-center">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <p>info@edomrestaurant.com</p>
              <p>We reply quickly</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="contact-info-card h-100 text-center">
              <div className="contact-icon">🕒</div>
              <h4>Opening Hours</h4>
              <p>Mon–Thu: 11 AM–10 PM</p>
              <p>Fri–Sun: 11 AM–11 PM</p>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="contact-form-card h-100">
              <p className="contact-section-label">Send a Message</p>
              <h3 className="mb-4">We’d Love to Hear From You</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contactName" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contactEmail" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contactMessage" className="form-label">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      id="contactMessage"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg w-100 contact-button"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>

                {status && (
                  <div
                    className={`reservation-status mt-4 ${
                      status.includes("successfully")
                        ? "status-success"
                        : status.includes("Sending")
                          ? "status-sending"
                          : "status-error"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-map-card h-100">
              <div className="contact-map-overlay">
                <div className="text-center text-white">
                  <div className="contact-map-pin">📍</div>
                  <h3>Edom Restaurant</h3>
                  <p>574 Main Street, Washington, DC</p>

                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning mt-2"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;