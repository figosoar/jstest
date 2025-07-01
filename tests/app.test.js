/**
 * Tests for the main application
 */
const request = require('supertest');
const app = require('../src/index');

describe('Express App', () => {
  it('should respond with welcome message on API route', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Welcome to the Node.js application!');
  });

  it('should serve the index.html file on root route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
  });
});