/**
 * Helper utility functions
 */

/**
 * Format a date to a string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Generate a random ID
 * @param {number} length - Length of the ID
 * @returns {string} Random ID
 */
function generateId(length = 8) {
  return Math.random().toString(36).substring(2, length + 2);
}

module.exports = {
  formatDate,
  generateId
};