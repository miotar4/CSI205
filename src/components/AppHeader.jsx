const Header = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center py-4"
      style={{
        background: "linear-gradient(135deg, #b39ddb, #7e57c2)", // ม่วงพาสเทล
        color: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        fontFamily: "'Kodchasan', 'Mali', sans-serif",
      }}
    >
      <h1 className="fs-2 fw-bold">CSI205 FRONT-END SOFTWARE DEVELOPMENT</h1>
    </div>
  );
};

export default Header;
