import React, { useState, useEffect } from 'react';
import './UploadMedia.css';

const UploadMedia = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const allowedFileTypes = [
    'video/mp4', 'video/webm', 'video/ogg',
    'image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp',
    'audio/mpeg', 'audio/wav', 'audio/ogg',
  ];

  // Effect to revoke object URLs when component unmounts or files change
  useEffect(() => {
    return () => {
      selectedFiles.forEach(file => {
        if (file.objectURL) {
          URL.revokeObjectURL(file.objectURL);
        }
      });
    };
  }, [selectedFiles]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => {
      if (allowedFileTypes.includes(file.type)) {
        return {
          file,
          objectURL: URL.createObjectURL(file),
          title: '',
          description: '',
          tags: '',
        };
      }
      return null;
    }).filter(Boolean);

    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);

    if (newFiles.length !== files.length) {
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
    const newFiles = files.map(file => {
      if (allowedFileTypes.includes(file.type)) {
        return {
          file,
          objectURL: URL.createObjectURL(file),
          title: '',
          description: '',
          tags: '',
        };
      }
      return null;
    }).filter(Boolean);

    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);

    if (newFiles.length !== files.length) {
      alert('Some dropped files were not valid media types and were ignored.');
    }
  };

  const handleRemoveFile = (fileToRemove) => {
    setSelectedFiles(prevFiles => {
      const updatedFiles = prevFiles.filter(file => file !== fileToRemove);
      if (fileToRemove.objectURL) {
        URL.revokeObjectURL(fileToRemove.objectURL);
      }
      return updatedFiles;
    });
  };

  const handleMetadataChange = (index, field, value) => {
    setSelectedFiles(prevFiles =>
      prevFiles.map((file, i) =>
        i === index ? { ...file, [field]: value } : file
      )
    );
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      alert(`Uploading ${selectedFiles.length} files with metadata... (Simulation)`);
      // Backend Annotation:
      // This is where the actual upload to a backend would occur.
      // For each file in `selectedFiles`:
      // 1. Create a FormData object.
      // 2. Append the file: formData.append('mediaFile', file.file);
      // 3. Append metadata: formData.append('title', file.title); etc.
      // 4. Send a POST request to your API endpoint (e.g., /api/media/upload) with the FormData.
      //    Example using fetch:
      //    fetch('/api/media/upload', {
      //      method: 'POST',
      //      body: formData,
      //      headers: { 'Authorization': 'Bearer YOUR_AUTH_TOKEN' } // Include auth token if user is logged in
      //    })
      //    .then(response => response.json())
      //    .then(data => console.log('Upload success:', data))
      //    .catch(error => console.error('Upload error:', error));

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
                <li key={file.file.name + index} className="file-item">
                  <div className="file-info">
                    {file.file.type.startsWith('image/') && <img src={file.objectURL} alt="preview" className="file-preview" />}
                    {file.file.type.startsWith('video/') && <video src={file.objectURL} controls className="file-preview" />}
                    {file.file.type.startsWith('audio/') && <span className="audio-icon">🎵</span>}
                    <span>{file.file.name} ({Math.round(file.file.size / 1024)} KB)</span>
                  </div>
                  <div className="file-metadata">
                    <input
                      type="text"
                      placeholder="Title"
                      value={file.title}
                      onChange={(e) => handleMetadataChange(index, 'title', e.target.value)}
                    />
                    <textarea
                      placeholder="Description"
                      value={file.description}
                      onChange={(e) => handleMetadataChange(index, 'description', e.target.value)}
                    ></textarea>
                    <input
                      type="text"
                      placeholder="Tags (comma-separated)"
                      value={file.tags}
                      onChange={(e) => handleMetadataChange(index, 'tags', e.target.value)}
                    />
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