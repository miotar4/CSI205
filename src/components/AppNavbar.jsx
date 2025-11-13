import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = ({ carts, products, setToken }) => {
  const menuItems = ["Home", "Calculator", "Animation", "Components", "Todos", "Products", "Carts"];

  return (
    <div
      className="d-flex justify-content-center align-items-center gap-3 py-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      {menuItems.map((item) => (
        <Link key={item} to={item.toLowerCase()} style={{ position: "relative" }}>
          <Button
            style={{
              backgroundColor: "#d1b3ff",
              borderColor: "#b39ddb",
              color: "#4b0082",
              fontSize: "1.3rem",
              padding: "0.85rem 2rem",
              fontWeight: "600",
              borderRadius: "14px",
              transition: "transform 0.2s",
              fontFamily: "'Kodchasan', 'Mali', sans-serif",
              position: "relative",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            {item}

            {/* แสดงจำนวนสินค้าในหน้า Products */}
            {item === "Products" && products?.length > 0 && (
              <span
                style={{
                  marginLeft: "5px",
                  backgroundColor: "#7e57c2",
                  color: "white",
                  borderRadius: "12px",
                  padding: "2px 8px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                ({products.length})
              </span>
            )}

            {/* แสดง badge จำนวนสินค้าในตะกร้า */}
            {item === "Carts" && carts?.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 7px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                {carts.length}
              </span>
            )}
          </Button>
        </Link>
      ))}
      
      {/* ปุ่ม Logout */}
      <Button
        variant="outline-danger"
        style={{
          backgroundColor: "#ffb3c6", 
          borderColor: "#ff99ac",
          color: "#8b0000",
          fontSize: "1.3rem",
          padding: "0.85rem 2rem",
          fontWeight: "600",
          borderRadius: "14px",
          transition: "transform 0.2s",
          fontFamily: "'Kodchasan', 'Mali', sans-serif",
          marginLeft: "2rem"

        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => setToken(null)}
      >
        Logout
      </Button>
    </div>
  );
};

export default AppNavbar;
