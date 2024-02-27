import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ maxvalue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase progress by a small increment
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress > maxvalue ? maxvalue : newProgress; // Cap progress at 100%
      });
    }, 50); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="progress">
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
