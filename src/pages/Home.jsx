const Home = () => {
  return (
    <div
      className="w-100 h-auto rounded-4"
      style={{
        background: "linear-gradient(180deg, #f5e6fa 0%, #f9f1ff 100%)",
        boxShadow: "0 6px 15px rgba(200, 150, 255, 0.3)",
        border: "2px solid #e2caff",
        fontFamily: "'Mali', sans-serif", 
      }}
    >
      <div className="d-flex justify-content-center align-items-center gap-5 py-5">
        <div
          className="text-center"
          style={{
            color: "#8a5fbf",
            fontSize: "1.2rem",
            lineHeight: "25px",
          }}
        >
          <h2 style={{
              color: "#a26be0",
              fontFamily: "'Kodchasan', sans-serif",
              fontWeight: "600",
            }}
          >What’s up! 💜</h2>
        </div>

        <div
          className="rounded-circle overflow-hidden"
          style={{
            width: "20rem",
            height: "20rem",
            boxShadow: "0 0 20px rgba(180, 140, 255, 0.4)",
            border: "5px solid #e4ccff",
          }}
        >
          <img
            className="w-100 h-100 object-fit-cover"
            src="./src/assets/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>

      <hr
        className="w-75 mx-auto opacity-100"
        style={{
          borderTop: "3px dashed #d1aaff",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      />

      <div>
        <h1
          className="text-center mb-5"
          style={{
            color: "#a26be0",
            fontWeight: "600",
            fontFamily: "'Kodchasan', sans-serif",
          }}
        >
         🌈 About Me 💫
        </h1>

        <p
          className="w-50 mx-auto pb-5 text-center"
          style={{
            color: "#7b4fa0",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "15px",
            padding: "1.5rem",
            boxShadow: "0 3px 8px rgba(190, 160, 255, 0.2)",
          }}
        >
<b>ชื่อ-นามสกุล:</b> นางสาว สุดารัตน์ แครงกลาง <br />
          <b>รหัสนักศึกษา:</b> 67145066 <br />
          <b>มหาวิทยาลัย:</b> มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ <br />
          <b>สาขา:</b> วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ [CSI] ปี 2<br /> 
          <b>งานอดิเรก:</b> ตีกลอง , อ่านหนังสือ , ฟังเพลง 🎵 <br />
          <b>อาหารที่ชอบ:</b> เมนูเส้น , ชาไทยหวานน้อย 🍜🧋<br />
          <b>สีที่ชอบ:</b> สีม่วงพาสเทล <br />
          <b>เพลงที่ชอบ:</b> Story of My Life - One Direction🎧 
        </p>
      </div>
    </div>
  );
};

export default Home;
