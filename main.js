const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: #f5f5f5;
            font-family: Arial;
            text-align: center;
            margin-top: 100px;
          }
          h1 {
            color: #007bff;
          }
          p {
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Node.js app!</h1>
        <p>This is a minimal Express app serving inline HTML & CSS.</p>
      </body>
    </html>
  `)
})
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})