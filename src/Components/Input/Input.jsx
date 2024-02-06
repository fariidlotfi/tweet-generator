import styles from "./Input.module.css";

const Input = ({
  type,
  id,
  padding,
  accept,
  placholder,
  display,
  color,
  onChange,
  value,
  width,
}) => {
  return (
    <input
      className={`${styles.input} ${!display && styles.displayNone}  ${
        width && styles.wFull
      }`}
      id={id}
      accept={accept}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placholder}
      style={{ color: color, padding: padding }}
    />
  );
};

export default Input;
