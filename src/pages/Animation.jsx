import { useState, useEffect, useRef } from "react";

import basketball from "/src/assets/img animation/basketball.jpg";
import football from "/src/assets/img animation/football.png";
import volleyball from "/src/assets/img animation/volleyball.jpg";
import human from "/src/assets/img animation/human.jpg";
import cartoon from "/src/assets/img animation/cartoon.png";
import field from "/src/assets/img animation/field.jpg";

const Animation = () => {
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [rotation, setRotation] = useState(0);
  const [running, setRunning] = useState(false);
  const [selectedBall, setSelectedBall] = useState(0);

  const runXRef = useRef(true);
  const runYRef = useRef(true);
  const xRef = useRef(10);
  const yRef = useRef(10);
  const rotationRef = useRef(0);

  const boxWidth = 1000;
  const boxHeight = 450;
  const ballSize = 100;
  const borderWidth = 5;
  const borderRadius = 30;
  const speedX = 3;
  const speedY = 3;
  const rotateSpeed = 3;

  const maxX = boxWidth - ballSize - borderWidth * 2;
  const maxY = boxHeight - ballSize - borderWidth * 2;

  const balls = [
    { id: 0, name: "None", image: null },
    { id: 1, name: "Basketball", image: basketball },
    { id: 2, name: "Football", image: football },
    { id: 3, name: "Volleyball", image: volleyball },
    { id: 4, name: "Human", image: human },
    { id: 5, name: "Cartoon", image: cartoon },
  ];

  const calculate = () => {
    if (runXRef.current) {
      xRef.current += speedX;
      if (xRef.current >= maxX) runXRef.current = false;
    } else {
      xRef.current -= speedX;
      if (xRef.current <= borderWidth) runXRef.current = true;
    }

    if (runYRef.current) {
      yRef.current += speedY;
      if (yRef.current >= maxY) runYRef.current = false;
    } else {
      yRef.current -= speedY;
      if (yRef.current <= borderWidth) runYRef.current = true;
    }

    rotationRef.current += rotateSpeed;
    setX(xRef.current);
    setY(yRef.current);
    setRotation(rotationRef.current);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
      }
    }, 10);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= "0" && e.key <= "6") {
        setSelectedBall(Number(e.key));
      } else if (e.key === " ") {
        e.preventDefault();
        setRunning((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleRunClick = () => setRunning((prev) => !prev);
  const handleBallClick = (id) => setSelectedBall(id);

  return (
    <div
      className="w-100 h-auto d-flex justify-content-center align-items-center bg-white rounded-4 py-3"
      style={{ boxShadow: "0 5px 5px #cccccc" }}
    >
      <div className="w-100 h-100 bg-gray-50 d-flex aligh-items-center justify-content-center p-5">
        <style>{`
          .monitor {
            background-image: url('${field}');
            background-size: cover;
            background-position: center;
            border: ${borderWidth}px solid #333;
            border-radius: ${borderRadius}px; 
            position: relative;
            overflow: hidden; 
          }

          .ball-container {
            width: ${ballSize}px;
            height: ${ballSize}px;
            border-radius: 50%;
            background-color: #5c636a;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: absolute;
          }

          .ball-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            transition: transform 0.05s linear;
          }

          .btn {
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-weight: 500;
            border: 1px solid;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }
        `}</style>

        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
          <div
            className="monitor bg-gray-300"
            style={{ width: `${boxWidth}px`, height: `${boxHeight}px` }}
          >
            <div
              className="ball-container"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {selectedBall !== 0 && balls[selectedBall].image && (
                <img
                  src={balls[selectedBall].image}
                  alt={balls[selectedBall].name}
                  className="ball-img"
                />
              )}
            </div>
          </div>

          <div className="w-100 d-flex justify-content-center align-items-center gap-4 mt-5">
            <button
              className={running ? "btn btn-danger" : "btn btn-success"}
              onClick={handleRunClick}
            >
              <i className={running ? "bi bi-pause" : "bi bi-play"}></i>
              {running ? "PAUSE" : "RUN"}
            </button>

            <div className="d-flex gap-2">
              {balls.map((ball) => (
                <button
                  key={ball.id}
                  className={
                    selectedBall === ball.id
                      ? ball.id === 0
                        ? "btn btn-secondary"
                        : "btn btn-primary"
                      : ball.id === 0
                      ? "btn btn-outline-secondary"
                      : "btn btn-outline-primary"
                  }
                  onClick={() => handleBallClick(ball.id)}
                >
                  {ball.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
