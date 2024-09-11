// components/Loader.tsx
import { useEffect, useState } from 'react';
import styles from './Preloader.module.scss'; // Import styles for the loader

interface LoaderProps {
    onComplete: () => void; // Callback function when the animation completes
}
const Loader = ({ onComplete }: LoaderProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete(); // Call the onComplete callback when progress reaches 100
                    return 100;
                }
                return prev + 10;
            });
        }, 100); // Adjust interval for the speed of the progress

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={styles.loader}>
            {/*<div className={styles.progressBar} style={{ width: `${progress}%` }}></div>*/}
            <div className={styles.progressText}>{progress}</div>
        </div>
    );
};

export default Loader;
