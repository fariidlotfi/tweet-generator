import styles from "./Button.module.css";

const Button = ({
  title,
  border,
  color,
  background,
  padding,
  borderRadius,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        border: border,
        color: color,
        background: background,
        padding: padding,
        borderRadius: borderRadius,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
