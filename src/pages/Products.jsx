import { Button } from "react-bootstrap";

const Products = ({ products, carts, setCarts }) => {
  const handleAddToCart = (product) => {
    if (!carts.find((item) => item.id === product.id)) {
      setCarts([...carts, product]);
    }
  };

  const isAdded = (id) => carts.find((item) => item.id === id);

  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(to bottom right, #f8f5ff, #f3e8ff)",
        minHeight: "85vh",
        borderRadius: "20px",
      }}
    >
      <h2 className="text-center fw-bold mb-4" style={{ color: "#7e57c2" }}>
        🛒 Products ({products.length})
      </h2>

      <div className="row g-4 justify-content-center">
        {products.map((p) => (
          <div key={p.id} className="col-6 col-md-4 col-lg-3">
            <div
              className="card shadow-sm border-0 d-flex flex-column"
              style={{
                height: "320px", // กำหนดความสูงเท่ากัน
                borderRadius: "16px",
                backgroundColor: "#ffffff",
                border: "2px solid #e1bee7",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div
                style={{
                  height: "150px",
                  backgroundColor: p.color || "#d1b3ff",
                  borderTopLeftRadius: "14px",
                  borderTopRightRadius: "14px",
                }}
              ></div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-semibold">{p.title}</p>
                  <p className="text-muted mb-2">${p.price.toFixed(2)}</p>
                </div>
                <Button
                  onClick={() => handleAddToCart(p)}
                  disabled={isAdded(p.id)}
                  style={{
                    backgroundColor: isAdded(p.id) ? "#d1b3ff" : "#7e57c2",
                    color: isAdded(p.id) ? "#4b0082" : "white",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  {isAdded(p.id) ? "✅ Added" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
