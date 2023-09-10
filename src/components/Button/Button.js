import classes from "./Button.module.css";

export default function Button({ title, onClick, disabled }) {
  return (
    <button className={classes.button} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
}
