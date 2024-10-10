import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { decrypt, importKeyFromBase64 } from './utils/utils';

const username = 'oscaroguledo';
const base64Ciphertext = "9WMT0z8vVuBaO9s1XEHB4LqGo7xgf7Rf5IVa60aqxdyHP4GnhcVDgAJw+hlPyNOc9YwNy1mU0jw=";
const iv = "NOO1MBBxxAsznkX3"
const key ="ING5Uh+mfVhnpZ1PRbhvMqtXh6GKimY+EwVYIWUpH7w="

function App() {
  const [ptoken, setPtoken] = useState('');


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

  useEffect(() => {
    fetchKey(); // Call the function to generate the key
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage ptoken={ptoken} username={username} />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
