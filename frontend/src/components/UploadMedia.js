import React, { useState, useEffect } from 'react';
import './UploadMedia.css';

const UploadMedia = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');

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

  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([^&?\n]*)/;
    const match = url.match(regExp);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => {
      if (allowedFileTypes.includes(file.type)) {
        return {
          id: Date.now() + Math.random(), // Unique ID for key prop
          type: file.type.startsWith('image') ? 'image' : file.type.startsWith('video') ? 'video' : 'audio',
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

  const handleYoutubeUrlChange = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const handleAddYoutubeVideo = () => {
    const embedUrl = getYouTubeEmbedUrl(youtubeUrl);
    if (embedUrl) {
      setSelectedFiles(prevFiles => [
        ...prevFiles,
        {
          id: Date.now() + Math.random(), // Unique ID
          type: 'youtube',
          url: embedUrl,
          title: '',
          description: '',
          tags: '',
        },
      ]);
      setYoutubeUrl(''); // Clear input
    } else {
      alert('Please enter a valid YouTube URL.');
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
          id: Date.now() + Math.random(), // Unique ID
          type: file.type.startsWith('image') ? 'image' : file.type.startsWith('video') ? 'video' : 'audio',
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
      const updatedFiles = prevFiles.filter(file => file.id !== fileToRemove.id);
      if (fileToRemove.objectURL) {
        URL.revokeObjectURL(fileToRemove.objectURL);
      }
      return updatedFiles;
    });
  };

  const handleMetadataChange = (id, field, value) => {
    setSelectedFiles(prevFiles =>
      prevFiles.map(file =>
        file.id === id ? { ...file, [field]: value } : file
      )
    );
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      alert(`Uploading ${selectedFiles.length} items with metadata... (Simulation)`);
      // Backend Annotation for Uploads:
      // For each item in `selectedFiles`:
      // If item.type is 'youtube':
      //   - Send a POST request to /api/media/youtube-embed
      //   - Body: { youtubeUrl: item.url, title: item.title, description: item.description, tags: item.tags }
      //   - Backend would: Validate URL, potentially fetch more metadata from YouTube Data API (using a YouTube API Key),
      //     store embed URL and metadata in database, associate with user.
      // If item.type is 'image', 'video', or 'audio':
      //   - Create a FormData object.
      //   - Append the file: formData.append('mediaFile', item.file);
      //   - Append metadata: formData.append('title', item.title); etc.
      //   - Send a POST request to /api/media/upload
      //   - Backend would: Store file in cloud storage (AWS S3, GCS), store metadata in database,
      //     potentially trigger media processing (thumbnail generation, transcoding).
      // Authentication/Authorization: Both endpoints would require an authenticated user (e.g., JWT in Authorization header).

      setSelectedFiles([]);
    } else {
      alert('Please select files or add YouTube URLs to upload.');
    }
  };

  return (
    <section className="upload-section">
      <h2>Upload Your Media</h2>

      <div className="youtube-input-area">
        <input
          type="text"
          placeholder="Paste YouTube video URL here"
          value={youtubeUrl}
          onChange={handleYoutubeUrlChange}
          className="youtube-url-input"
        />
        <button onClick={handleAddYoutubeVideo} disabled={!youtubeUrl.trim()} className="add-youtube-button">
          Add YouTube Video
        </button>
      </div>

      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & Drop your local media files here, or</p>
        <input type="file" multiple onChange={handleFileChange} accept={allowedFileTypes.join(',')} />
        
      </div>

      <button onClick={handleUpload} disabled={selectedFiles.length === 0} className="upload-all-button">
          Upload All Selected
        </button>

      {selectedFiles.length > 0 && (
        <div className="file-list">
          <h3>Items to Upload:</h3>
          <ul>
            {selectedFiles.map((item, index) => (
              <li key={item.id} className="file-item">
                <div className="file-info">
                  {item.type === 'image' && <img src={item.objectURL} alt="preview" className="file-preview" />}
                  {item.type === 'video' && <video src={item.objectURL} controls className="file-preview" />}
                  {item.type === 'audio' && <span className="audio-icon">🎵</span>}
                  {item.type === 'youtube' && (
                    <iframe
                      src={item.url}
                      title="YouTube video preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="file-preview youtube-preview"
                    ></iframe>
                  )}
                  <span>{item.file ? `${item.file.name} (${Math.round(item.file.size / 1024)} KB)` : 'YouTube Video'}</span>
                </div>
                <div className="file-metadata">
                  <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => handleMetadataChange(item.id, 'title', e.target.value)}
                  />
                  <textarea
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => handleMetadataChange(item.id, 'description', e.target.value)}
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Tags (comma-separated)"
                    value={item.tags}
                    onChange={(e) => handleMetadataChange(item.id, 'tags', e.target.value)}
                  />
                </div>
                <button onClick={() => handleRemoveFile(item)} className="remove-file-button">X</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default UploadMedia;
