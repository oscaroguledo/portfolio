
// Generate AES key and export it
export async function generateKey() {
    const key = await crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"]
    );
    return key
}


// Encrypt function
export async function encrypt(text, key) {
    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
    const encodedText = encoder.encode(text);
    
    const encryptedData = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        encodedText
    );
    
    return {
        ciphertext: new Uint8Array(encryptedData),
        iv: iv
    };
}

// Decrypt function
export async function decrypt(encryptedData, key) {
    const { ciphertext, iv } = encryptedData;
    
    const decryptedData = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        ciphertext
    );
    
    const decoder = new TextDecoder();
    return decoder.decode(decryptedData);
}

// Save key to a text file and trigger download in the browser
// Function to save details to a file
export const saveToFile = (base64Key, ciphertext, iv) => {
    const content = `Base64 Key: ${base64Key}\nBase64 Ciphertext: ${ciphertext}\nBase64 IV: ${iv}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'encrypted_details.txt'; // Filename for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up
};

// Function to import a CryptoKey from a Base64 string
export async function importKeyFromBase64(base64Key) {
    const rawKey = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0)); // Decode Base64 to Uint8Array
    return await crypto.subtle.importKey(
        "raw", // The format of the key
        rawKey, // The key data
        {
            name: "AES-GCM",
            length: 256,
        },
        true, // Extractable
        ["encrypt", "decrypt"] // Usages
    );
}

    