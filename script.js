// script.js

// Get references to HTML elements using their IDs
const codeElement = document.getElementById("code"); // Textarea for code input
const copyButton = document.getElementById("copy-button"); // Copy button
const saveButton = document.getElementById("save-button"); // Save button
const lockButton = document.getElementById("lock-button"); // Lock button

let isLocked = false; // Initialize a flag to track whether the code editor is locked

// Event listener for the "Copy" button
copyButton.addEventListener("click", () => {
    const codeText = codeElement.value; // Get the code from the textarea
    // Copy the code to the clipboard using the Clipboard API
    navigator.clipboard.writeText(codeText).then(() => {
        alert("Code copied to clipboard."); // Display a success message
    }).catch(err => {
        console.error("Copy failed: " + err); // Handle copy failure and display an error message
    });
});

// Event listener for the "Save" button
saveButton.addEventListener("click", () => {
    const codeText = codeElement.value; // Get the code from the textarea
    // You can implement code saving logic to a server or local storage here.
    // For simplicity, we'll log the code to the console.
    console.log("Code saved:\n" + codeText);
});

// Event listener for the "Lock" button
lockButton.addEventListener("click", () => {
    isLocked = !isLocked; // Toggle the locked state
    if (isLocked) {
        codeElement.readOnly = true; // Make the code textarea read-only
        lockButton.innerText = "Unlock"; // Change the button text to "Unlock"
    } else {
        codeElement.readOnly = false; // Make the code textarea editable
        lockButton.innerText = "Lock"; // Change the button text to "Lock"
    }
});
