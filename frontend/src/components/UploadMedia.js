import React, { useState } from 'react';
import './UploadMedia.css';

const UploadMedia = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      alert(`Uploading ${selectedFiles.length} files... (Simulation)`);
      // In a real application, you would send these files to a backend server
      setSelectedFiles([]);
    } else {
      alert('Please select files to upload.');
    }
  };

  return (
    <section className="upload-section">
      <h2>Upload Your Media</h2>
      <div className="upload-area">
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={selectedFiles.length === 0}>
          Upload Files
        </button>
        {selectedFiles.length > 0 && (
          <div className="file-list">
            <h3>Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name} ({Math.round(file.size / 1024)} KB)</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadMedia;
