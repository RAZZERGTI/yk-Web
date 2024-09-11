import React, { useState } from 'react';
import styles from './Questions.module.scss';

const BudgetSlider = ({ min, max, step, onValueChange }) => {
    const [value, setValue] = useState(min);

    const handleSliderChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onValueChange(newValue); // Передача значения в родительский компонент
    };

    return (
        <div className={styles.sliderWrapper}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleSliderChange}
                className={styles.slider}
            />
            <div className={styles.sliderValue}>
                ${value}
                <p>${max}</p>
            </div>
        </div>
    );
};

export default BudgetSlider;
