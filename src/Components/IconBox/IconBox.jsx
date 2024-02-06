import styles from "./IconBox.module.css";

const IconBox = ({ title, color, children }) => {
  return (
    <div className={styles.box}>
      {children}
      <p className={styles.title} style={{ color: color }}>
        {title}
      </p>
    </div>
  );
};

export default IconBox;
