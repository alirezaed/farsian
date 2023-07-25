import Header from "./Header/Header";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Header />
      <div>{children}</div>
    </div>
  );
}
