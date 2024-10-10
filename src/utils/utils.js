
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
export function saveKeyToFile(key) {
    const blob = new Blob([key], { type: 'text/plain' }); // Create a blob from the Base64 key
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generatedKey.txt';
    
    document.body.appendChild(link); // Append link to the body
    link.click(); // Trigger click to start download
    document.body.removeChild(link); // Remove link from the document
}

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

    