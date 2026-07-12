import { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
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
    setStatus("Sending reservation...");

    try {
      const response = await fetch("http://localhost:5000/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.message);

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="reservation-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="reservation-card shadow">
              <div className="text-center mb-4">
                <p className="reservation-small-title">Book Your Table</p>
                <h1>Make a Reservation</h1>
                <p className="text-muted">
                  Complete the form below and we will receive your reservation
                  request by email.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="guests" className="form-label">
                      Number of Guests
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      id="guests"
                      name="guests"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="Number of guests"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="date" className="form-label">
                      Reservation Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="time" className="form-label">
                      Reservation Time
                    </label>

                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Special Requests
                    </label>

                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Birthday, allergies, seating preference, etc."
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg w-100 reservation-button"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Reservation"}
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
        </div>
      </div>
    </section>
  );
}

export default Reservation;