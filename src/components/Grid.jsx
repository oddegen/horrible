import { useEffect, useState } from "react";

const Grid = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const items = [];
      for (let i = 0; i < 5; i++) {
        const position = {
          id: i + 1,
          top: `${Math.floor(Math.random() * 30) + 1}vh`,
          left: `${Math.floor(Math.random() * 80) + 1}vw`,
          zIndex: i + 1,
          url: "",
        };
        items.push(position);
      }
      setPositions(items);
    };

    generateRandomPositions();
  }, []);

  return (
    <div className="h-full relative">
      {positions.map((position) => (
        <div
          key={position.id}
          className="absolute"
          style={{
            top: position.top,
            left: position.left,
            zIndex: position.zIndex,
          }}
        >
          <img
            className="object-cover h-60 w-60"
            src={position.url}
            alt={`img`}
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;
