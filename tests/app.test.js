import { describe, expect, test } from 'vitest'
import request from 'supertest'
import app from '../server/app.js'

describe('Users API', () => {
  test('GET /api/users should return all users', async () => {
    const response = await request(app).get('/api/users')

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })

  test('GET /api/users/1 should return one user', async () => {
    const response = await request(app).get('/api/users/1')

    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBe(1)
    expect(response.body.name).toBe('Ana')
  })

  test('GET /api/users/999 should return 404', async () => {
    const response = await request(app).get('/api/users/999')

    expect(response.statusCode).toBe(404)
    expect(response.body.message).toBe('User not found')
  })

  test('POST /api/users should create a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Dennys',
        email: 'dennys@example.com',
      })

    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe('Dennys')
    expect(response.body.email).toBe('dennys@example.com')
  })

  test('POST /api/users should reject incomplete data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Dennys',
      })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('Name and email are required')
  })
})
