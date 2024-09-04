import express from 'express'
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  { id:25, name: 'Product25', price:250 },
]
const users =  [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
]
const server = express()
server.get('/', (req, res) => {
  res.send({ message: 'Hello World! from backend server' })
})
server.get('/api/allproducts', (req, res) => {
res.json(products)

})
server.get('/api/product/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  console.log(req.params.id,'checking which id is coming');
  
  const product = products.find(p => p.id === productId)
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  res.json([product])
})

server.get('/api/users',(req,res)=>{
    res.send({users})
})

server.get('/api/user/:id',(req,res)=>{
    const userid = parseInt(req.params.id)
    const user = users.find(p => p.id === userid)
    if(!user){
        return res.status(404).jason({message:'Product not found'})

    }
    res.send({user})
})
server.listen(8000,() => {
  console.log('server started');
});