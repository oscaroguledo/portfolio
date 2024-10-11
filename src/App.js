import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { decrypt,  importKeyFromBase64 } from './utils/utils';

const username = 'oscaroguledo';
const base64Ciphertext = "9WMT0z8vVuBaO9s1XEHB4LqGo7xgf7Rf5IVa60aqxdyHP4GnhcVDgAJw+hlPyNOc9YwNy1mU0jw=";
const iv = "NOO1MBBxxAsznkX3"
const key ="ING5Uh+mfVhnpZ1PRbhvMqtXh6GKimY+EwVYIWUpH7w="
const gitlabbase64Ciphertext = "XLI6jUTEhwHqCaN4tIqOT5QGerYV4+wfRy+FhiS7U3WXoflA5nUtOC9z";
const gitlabiv = "md8iXERYWc18t9Jp"
const gitlabkey ="vW78FAtkweHqoV+4LcooKKHg3eoGDT5Ru9YWRz4s0LE="

function App() {
  const [ptoken, setPtoken] = useState('');
  const [gitlabtoken, setGitLabToken] = useState('');

  // Function to execute key generation, encryption, and decryption
  const fetchKey = async () => {
    try {
      
      const importedKey = await importKeyFromBase64(key);

      // Decrypt using Base64 ciphertext and IV
      const ciphertextBytes = Uint8Array.from(atob(base64Ciphertext), c => c.charCodeAt(0)); // Decode Base64 ciphertext
      const ivBytes = Uint8Array.from(atob(iv), c => c.charCodeAt(0)); // Decode Base64 IV

      const decryptedData = await decrypt({ ciphertext: ciphertextBytes, iv: ivBytes }, importedKey); // Decrypt using the imported CryptoKey

      setPtoken(decryptedData); // Set the decrypted data in state

    } catch (error) {
      console.error("Error in key operations:", error);
    }
  };

  const fetchgitlabKey = async () => {
      try {
          
          // Save details to a file
          //saveToFile(gitlabkey, gitlabbase64Ciphertext, gitlabiv);

          // Import the AES key from Base64
          const importedKey = await importKeyFromBase64(gitlabkey);
          //console.log("Imported Key:", importedKey); // Debugging statement

          // Decode Base64 ciphertext and IV
          const ciphertextBytes = Uint8Array.from(atob(gitlabbase64Ciphertext), c => c.charCodeAt(0)); // Decode Base64 ciphertext
          const ivBytes = Uint8Array.from(atob(gitlabiv), c => c.charCodeAt(0)); // Decode Base64 IV

          // Decrypt using the imported CryptoKey
          const decryptedData = await decrypt({ ciphertext: ciphertextBytes, iv: ivBytes }, importedKey);
          //onsole.log(decryptedData, '==='); // Log the decrypted data
          setGitLabToken(decryptedData); // Set the decrypted data in state

      } catch (error) {
          console.error("Error in key operations:", error);
      }
  };
  

  useEffect(() => {
    fetchKey(); // Call the function to generate the key
    fetchgitlabKey();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage ptoken={ptoken} username={username} gitlabtoken={gitlabtoken} />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
