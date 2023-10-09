import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div
      style={{
        backgroundColor: "rgb(0 0 0 / 67%)",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "900",
        top: "0",
        left: "0",
      }}
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
