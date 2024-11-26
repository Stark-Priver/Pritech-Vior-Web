import React, { useEffect, useState } from "react";
import "./CustomCursor.css"; // Import the CSS styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the cursor position on mouse move
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
