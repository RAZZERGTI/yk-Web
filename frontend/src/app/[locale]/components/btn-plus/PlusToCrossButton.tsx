// components/PlusToCrossButton.js
import styles from './PlusToCrossButton.module.scss';

const PlusToCrossButton = ({ isCross, toggleButton }) => {
    return (
        <button className={`${styles.button} ${isCross ? styles.cross : ''}`} onClick={toggleButton}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
};

export default PlusToCrossButton;
