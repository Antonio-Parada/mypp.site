import React, { useState } from 'react';
import './UploadMedia.css';

const UploadMedia = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const allowedFileTypes = [
    'video/mp4', 'video/webm', 'video/ogg',
    'image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp',
    'audio/mpeg', 'audio/wav', 'audio/ogg',
  ];

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => allowedFileTypes.includes(file.type));
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    if (validFiles.length !== files.length) {
      alert('Some selected files were not valid media types and were ignored.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    const validFiles = files.filter(file => allowedFileTypes.includes(file.type));
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    if (validFiles.length !== files.length) {
      alert('Some dropped files were not valid media types and were ignored.');
    }
  };

  const handleRemoveFile = (fileToRemove) => {
    setSelectedFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
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
      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & Drop your media files here, or</p>
        <input type="file" multiple onChange={handleFileChange} accept={allowedFileTypes.join(',')} />
        <button onClick={handleUpload} disabled={selectedFiles.length === 0}>
          Upload Files
        </button>
        {selectedFiles.length > 0 && (
          <div className="file-list">
            <h3>Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index} className="file-item">
                  <div className="file-info">
                    {file.type.startsWith('image/') && <img src={URL.createObjectURL(file)} alt="preview" className="file-preview" />}
                    {file.type.startsWith('video/') && <video src={URL.createObjectURL(file)} controls className="file-preview" />}
                    {file.type.startsWith('audio/') && <span className="audio-icon">🎵</span>}
                    <span>{file.name} ({Math.round(file.size / 1024)} KB)</span>
                  </div>
                  <button onClick={() => handleRemoveFile(file)} className="remove-file-button">X</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadMedia;
