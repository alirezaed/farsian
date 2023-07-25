import classes from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className={classes.header} style={{ height: "100px" }}>
        HEADER
      </div>
      <div>{children}</div>
    </div>
  );
}
