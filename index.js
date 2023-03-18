const fs = require('fs');

// Read the file content
const filePath = '/Learning/Node_JS/file_read/file.txt';
const fileContent = fs.readFileSync(filePath, 'utf8');

// Replace the current text with new text
const currentText = 'old text';
const newText = 'new text';
const replacedText = fileContent.replace(currentText, newText);

// Write the updated content to the file
fs.writeFileSync(filePath, replacedText, 'utf8');

console.log('File updated successfully!');
