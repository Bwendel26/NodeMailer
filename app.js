const express = require('express')
const nodeMailer = require('nodemailer')

const app = express()

const port = 3000

const user = "wallksignarf@gmail.com"
const pass = "123159onurb123357"

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/send', (req, res) => {
  
   const transporter = nodeMailer.createTransport({
      host:"smtp.umbler.com",
      port: "", //Deveria entrar com os dados da umbler...
      auth: { user, pass }
   })

   transporter.sendMail({
      from: user,
      to: "bwendel26999@gmail.com",
      replyTo: user,
      subject: "Seja bem vindo!",
      text: "Ola, seja bem vindo a meu mailer"
   }).then(info => {
      res.send(info)
   }).catch(error => {
      res.send(error)
   })

})

app.listen(port, () => console.log(`Running on port ${port}!`))

