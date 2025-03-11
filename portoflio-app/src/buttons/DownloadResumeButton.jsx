import React from 'react';
import './DownloadResumeButton.css';

const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Simulating Resume Download
    const link = document.createElement('a');
    link.href = '/path/to/your/resume.pdf'; // Change this to the actual resume file path
    link.download = 'Ralph_Vincent_Arienza_Resume.pdf';
    link.click();
  };

  return (
    <button className="download-resume-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
