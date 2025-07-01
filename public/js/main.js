/**
 * Main client-side JavaScript file
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  // Example of adding dynamic content
  const container = document.querySelector('.container');
  const timestamp = document.createElement('p');
  timestamp.textContent = `Page loaded at: ${new Date().toLocaleString()}`;
  container.appendChild(timestamp);
});