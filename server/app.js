import express from 'express'

const app = express()

app.use(express.json())

const users = [
  {
    id: 1,
    name: 'Ana',
    email: 'ana@example.com',
  },
  {
    id: 2,
    name: 'Carlos',
    email: 'carlos@example.com',
  },
]

// GET /api/users
app.get('/api/users', (req, res) => {
  return res.status(200).json(users)
})

// GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id)

  const user = users.find((item) => item.id === id)

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    })
  }

  return res.status(200).json(user)
})

// POST /api/users
app.post('/api/users', (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({
      message: 'Name and email are required',
    })
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  }

  users.push(newUser)

  return res.status(201).json(newUser)
})

export default app
