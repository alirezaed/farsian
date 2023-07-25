import classes from "./MenuItem.module.css";

export default function MenuItem({ to, title }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState('', '', to);
  };

  return (
    <a onClick={handleClick} className={classes.menuItem}>
      {title}
    </a>
  );
}
