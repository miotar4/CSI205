import React from "react";
import { Button } from "react-bootstrap";

const Carts = ({ carts, setCarts }) => {
  const handleDelete = (id) => {
    setCarts(carts.filter((item) => item.id !== id));
  };

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(to bottom right, #f8f5ff, #f3e8ff)",
        minHeight: "85vh",
        borderRadius: "20px",
      }}
    >
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#7e57c2", fontFamily: "'Kodchasan', 'Mali', sans-serif" }}
      >
        🛍️ Your Carts ({carts.length})
      </h2>

      {carts.length === 0 ? (
        <p className="text-center text-muted fs-5">No items in your cart 🛒</p>
      ) : (
        <>
          <div className="row g-4 justify-content-center">
            {carts.map((p) => (
              <div key={p.id} className="col-6 col-md-4 col-lg-3">
                <div
                  className="card shadow-sm border-0"
                  style={{
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
                  <div className="card-body text-center">
                    <p className="fw-semibold">{p.title}</p>
                    <p className="text-muted mb-2">${p.price.toFixed(2)}</p>
                    <Button
                      onClick={() => handleDelete(p.id)}
                      style={{
                        backgroundColor: "#f8bbd0",
                        color: "#880e4f",
                        fontWeight: "600",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      Delete from Carts
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* รวมราคาด้านล่าง */}
          <div className="text-center mt-5">
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#ede7f6",
                padding: "12px 24px",
                borderRadius: "16px",
                border: "2px solid #b39ddb",
                fontSize: "1.2rem",
              }}
            >
              Products:{" "}
              <span className="badge bg-secondary me-2">
                {carts.length} items
              </span>
              Total price:{" "}
              <span className="badge bg-success">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="mt-4">
              <Button
                style={{
                  backgroundColor: "#7e57c2",
                  color: "white",
                  fontWeight: "600",
                  padding: "10px 30px",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                }}
              >
                💳 Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carts;
