const fs = require('fs');
const path = require('path');

// Define the file name and path relative to the current working directory
const fileName = 'file.txt';
const filePath = path.join(process.cwd(), fileName);

// Define the text to be replaced
const searchText = 'Hello';
const replaceText = 'Hi';

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Replace the text and save the file
  const result = data.replace(new RegExp(searchText, 'g'), replaceText);
  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File updated successfully!');
  });
});
