import { json } from 'body-parser'
const app = require('express')()

app.use(json())

app.post('/add', (req, res) => {
  const { productId } = req.body

  if (!productId) {
    res.status(400)
    res.send('Product ID required')
  } else {
    res.json({
      title: 'Over Priced Plastic Widget',
      price: 2000,
      qty: 1,
    })
  }
})

app.post('/clear', (req, res) => {
  res.status(200)
  res.send('Successfully cleared cart')
})

export default app
