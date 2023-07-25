import logo from "./burgerlogo.png";
import classes from './Logo.module.css';

export default function Logo() {
  return <img src={logo} className={classes.logo}  />;
}
