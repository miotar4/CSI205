import { useState } from 'react';
import Value from '../components/Value';
import Adder from '../components/Adder';
import Timer from '../components/Timer';
import Temperature from '../components/Temperature';
import RadixCounter from '../components/RadixCounter';

const Components = () => {
  const [value, setValue] = useState(0);

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem",
    fontFamily: "'Kodchasan', 'Mali', sans-serif", // font ของ container อื่น ๆ
  };

  const rowStyle = {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "space-between",
  };

  const rowCenterStyle = {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  };

  const boxStyle = {
    flex: 1,
    padding: "1rem",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "none",
    backgroundColor: "transparent",
  };

  const centerBoxStyle = {
    flex: "0 0 48%",
    padding: "1rem",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "none",
    backgroundColor: "transparent",
  };

  const nameBoxStyle = {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#7e57c2",
    marginTop: "3rem",
    padding: "0.5rem 1.5rem",
    border: "2px solid #b39ddb",
    borderRadius: "15px",
    display: "inline-block",
  };

  // font สำหรับ Component ทั้งหมด
  const componentFontStyle = {
    fontFamily: '"Bitcount Grid Single", system-ui',
  };

  return (
    <div className='w-100 h-auto d-flex justify-content-center align-items-center bg-white rounded-4 py-3' style={{ boxShadow: '0 5px 5px #cccccc' }}>
      <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "2rem 0" }}>
        <div style={containerStyle}>

          <div style={rowStyle}>
            <div style={boxStyle}>
              <Value name={'COUNTER'} value={value} setValue={setValue} style={componentFontStyle} />
            </div>
            <div style={boxStyle}>
              <Timer style={componentFontStyle} />
            </div>
            <div style={boxStyle}>
              <RadixCounter style={componentFontStyle} />
            </div>
          </div>

          <div style={rowCenterStyle}>
            <div style={centerBoxStyle}>
              <Temperature style={componentFontStyle} />
            </div>
            <div style={centerBoxStyle}>
              <Adder style={componentFontStyle} />
            </div>
          </div>

          <div style={nameBoxStyle}>
            นางสาว สุดารัตน์ แครงกลาง รหัส 67145066
          </div>

        </div>
      </div>
    </div>
  );
};

export default Components;
