import React, { useEffect, useState } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [Color, setColor] = useState("#000000");

  const randomUtility = (length) => Math.floor(Math.random() * length); // gereate random value for hex index
  // for Hex Color
  const handleGenerateHexRandomColor = () => {
    //let color = Math.floor(Math.random() * 1000000 + 1); only generate numbers but hex value also contain alphabets
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    // console.log(hex);

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)]; // logic used in tutorial
      {
        /*let number = Math.floor(Math.random() * hex.length);
       hexColor += hex[number];*/
      } // My logic
    }
    //console.log(hexColor);
    setColor(hexColor);
  };
  // for RGB
  const handleGenerateRgbRandomColor = () => {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleGenerateRgbRandomColor();
    } else {
      handleGenerateHexRandomColor();
    }
  }, [typeOfColor]);
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: Color,
        borderRadius: "7px",
        textAlign: "center",
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Generate RGB Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Generate HEX Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleGenerateHexRandomColor
            : handleGenerateRgbRandomColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <h2>{typeOfColor === "hex" ? "HEX Color: " : "RGB Color: "}</h2>
        <h1> {Color}</h1>
      </div>
    </div>
  );
}
