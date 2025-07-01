/**
 * Tests for helper utility functions
 */
const { formatDate, generateId } = require('../../src/utils/helpers');

describe('Helper Utilities', () => {
  describe('formatDate', () => {
    it('should format a date to YYYY-MM-DD', () => {
      const testDate = new Date('2023-05-15T12:00:00Z');
      expect(formatDate(testDate)).toBe('2023-05-15');
    });
  });

  describe('generateId', () => {
    it('should generate an ID with default length', () => {
      const id = generateId();
      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThanOrEqual(8);
    });

    it('should generate an ID with specified length', () => {
      const length = 12;
      const id = generateId(length);
      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThanOrEqual(length);
    });
  });
});