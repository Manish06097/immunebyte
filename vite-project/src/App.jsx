// File: src/App.js
import React, { useState } from 'react';

const App = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>API Testing Page</h1>
      <label htmlFor="fileInput">Choose a file:</label>
      <input type="file" id="fileInput" onChange={handleFileChange} accept=".zip, .txt" />
      <button onClick={uploadFile}>Upload</button>
      <div>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default App;
