import "./Loading.css";
export default function Loading() {
  return (
    <div
      style={{
        backgroundColor: "#c4c4c487",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "900",
      }}
    >
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
