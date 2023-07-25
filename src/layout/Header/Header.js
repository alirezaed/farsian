import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import MenuItem from "./MenuItem/MenuItem";

export default function Header() {
  return (
    <div className={classes.header}>
      <div>
        <MenuItem title="Sign In" to="/signin" />
      </div>
      <Logo />
      <div>
        <MenuItem title="All Orders" to="/AllOrders" />
        <MenuItem title="Order" to="/Order" />
      </div>
    </div>
  );
}
