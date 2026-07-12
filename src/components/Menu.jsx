const menuItems = [
  {
    category: "Appetizers",
    name: "Garlic Bread",
    description: "Warm garlic bread served with herbs and dipping sauce.",
    price: "$5.99",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=700",
  },
  {
    category: "Appetizers",
    name: "Crispy Calamari",
    description: "Golden fried calamari served with marinara sauce.",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700",
  },
  {
    category: "Appetizers",
    name: "Fresh Garden Salad",
    description: "Mixed greens, tomatoes, cucumbers, and house dressing.",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700",
  },
  {
    category: "Main Courses",
    name: "Cheeseburger",
    description: "Juicy beef burger with cheese, lettuce, and tomato.",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
  },
  {
    category: "Main Courses",
    name: "Grilled Chicken",
    description: "Seasoned grilled chicken served with fresh vegetables.",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700",
  },
  {
    category: "Main Courses",
    name: "Grilled Salmon",
    description: "Fresh salmon served with vegetables and lemon sauce.",
    price: "$21.99",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700",
  },
  {
    category: "Pasta",
    name: "Spaghetti Bolognese",
    description: "Classic pasta with rich homemade meat sauce.",
    price: "$14.99",
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=700",
  },
  {
  category: "Pasta",
  name: "Seafood Pasta",
  description: "Fresh shrimp and mussels tossed with creamy garlic sauce.",
  price: "$18.99",
  image:
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700",
},
  {
    category: "Pasta",
    name: "Creamy Alfredo Pasta",
    description: "Creamy Alfredo sauce served with Parmesan cheese.",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
  },
  {
    category: "Desserts",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with a soft and creamy center.",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
  },
  {
  category: "Desserts",
  name: "Ice Cream Sundae",
  description: "Vanilla ice cream topped with chocolate syrup and nuts.",
  price: "$5.99",
  image:
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700",
},
  {
    category: "Desserts",
    name: "Cheesecake",
    description: "Creamy cheesecake served with fresh berry sauce.",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700",
  },
  {
    category: "Drinks",
    name: "Fresh Lemonade",
    description: "Freshly prepared lemonade served cold.",
    price: "$3.99",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=700",
  },
  {
  category: "Drinks",
  name: "Fresh Orange Juice",
  description: "Freshly squeezed orange juice served chilled.",
  price: "$4.99",
  image:
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700",
},
  {
    category: "Drinks",
    name: "Iced Coffee",
    description: "Refreshing iced coffee with your choice of milk.",
    price: "$4.99",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700",
  },
];

const categories = [
  "Appetizers",
  "Main Courses",
  "Pasta",
  "Desserts",
  "Drinks",
];

function Menu() {
  return (
    <>
      <section className="menu-hero">
        <div className="menu-hero-overlay">
          <div className="container text-center text-white">
            <p className="menu-small-title">Freshly Prepared</p>
            <h1 className="display-4 fw-bold">Our Menu</h1>
            <p className="lead">
              Explore our delicious selection of food and drinks.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        {categories.map((category) => (
          <div className="menu-category-section" key={category}>
            <div className="text-center mb-4">
              <p className="menu-section-label">Edom Restaurant</p>
              <h2>{category}</h2>
            </div>

            <div className="row g-4 mb-5">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div
                    className="col-md-6 col-lg-4"
                    key={item.name}
                  >
                    <div className="card menu-card h-100 shadow-sm">
                      <div className="menu-image-wrapper">
                        <img
                          src={item.image}
                          className="card-img-top menu-image"
                          alt={item.name}
                        />

                        <span className="menu-category-badge">
                          {item.category}
                        </span>
                      </div>

                      <div className="card-body d-flex flex-column">
                        <h3 className="card-title">{item.name}</h3>

                        <p className="card-text flex-grow-1">
                          {item.description}
                        </p>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="menu-price">
                            {item.price}
                          </span>

                          <span className="menu-favorite">★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Menu;