import classes from './Button.module.css';


export default function Button({ title, onClick }) {
  return <button className={classes.button} onClick={onClick}>{title}</button>;
}
