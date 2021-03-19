import { json } from 'body-parser'
const app = require('express')()
const cors = require('cors')

app.use(cors())
app.use(json())

app.post('/add', (req, res) => {
  res.json({
    title: 'Over Priced Plastic Widget',
    price: 2000,
    qty: 1,
  })
})

app.post('/clear', (req, res) => {
  res.status(200)
  res.send('Successfully cleared cart')
})

export default app
