const Footer = () => {
  return (
    <div
      className="text-center text-white py-4"
      style={{
        background: "linear-gradient(135deg, #b39ddb, #7e57c2)",
        boxShadow: "0 -3px 10px rgba(0, 0, 0, 0.2)",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        fontFamily: "'Kodchasan', 'Mali', sans-serif"
      }}
    >
      <span className="fs-5 d-block mb-2">
        มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ <br />
        สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ (CSI)
      </span>
      <span className="d-block mb-1" style={{ fontSize: "1.1rem", fontWeight: 500 }}>
        💌 Contact Me
      </span>
      <div style={{ lineHeight: "1.8" }}>
        🌸 Instagram: <a href="https://www.instagram.com/miotar_" target="_blank" rel="noreferrer" style={{ color: "#FFD6FF", textDecoration: "none" }}>miotar_</a> <br />
        ✉️ Email: <a href="mailto:sudarat.kre@spumail.net" style={{ color: "#FFD6FF", textDecoration: "none" }}>sudarat.kre@spumail.net</a>
      </div>
    </div>
  );
};

export default Footer;
