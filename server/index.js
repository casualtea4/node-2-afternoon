const express = require('express')
const app = express()
const port = 3001
const messages = require('./controller/messages_controller')

app.use(express.json())
app.use(express.static(__dirname+ '/../public/build'));

// controllers
const messagesUrl = '/api/messages'
app.post(messagesUrl, messages.create)
app.get(messagesUrl, messages.read)
app.put(`${messagesUrl}/:id`, messages.update)
app.delete(`${messagesUrl}/:id`, messages.delete)

app.listen(port, ()=>{
    console.log(`this be running on ${port}`)
});

