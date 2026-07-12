const galleryImages = [
  {
    title: "Signature Burger",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",
  },
  {
    title: "Fresh Pasta",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=1000",
  },
  {
    title: "Grilled Chicken",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1000",
  },
  {
    title: "Chocolate Cake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000",
  },
  {
    title: "Fresh Salad",
    category: "Appetizer",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000",
  },
  {
    title: "Fresh Lemonade",
    category: "Drink",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=1000",
  },
  {
    title: "Elegant Dining Room",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000",
  },
  {
    title: "Warm Dining Atmosphere",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000",
  },
  {
    title: "Chef’s Special",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000",
  },
];

function Gallery() {
  return (
    <>
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <div className="container text-center text-white">
            <p className="gallery-small-title">Taste the Experience</p>
            <h1 className="display-4 fw-bold">Our Gallery</h1>
            <p className="lead">
              Discover our food, atmosphere, and memorable dining experience.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <p className="gallery-section-label">Edom Restaurant</p>
          <h2>Food & Restaurant Moments</h2>
          <p className="text-muted">
            Explore some of our favorite dishes and restaurant spaces.
          </p>
        </div>

        <div className="row g-4">
          {galleryImages.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.title}>
              <div className="premium-gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="premium-gallery-image"
                />

                <div className="premium-gallery-overlay">
                  <div>
                    <p>{item.category}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;