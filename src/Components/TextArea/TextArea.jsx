//import styles
import styles from "./TextArea.module.css";

const TextArea = ({ rows, padding, placeholder, value, onChange }) => {
  return (
    <textarea
      className={styles.textArea}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
