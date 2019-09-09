var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    app.get('/api/customers', (req, res) => {
        const customers = [
          {id: 1, username: 'bimal', password: '123'},
          {id: 2, username: 'mith', password: '12345'},
        ];
        res.json(customers);
      });
    app.post('/api/sendemail', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'bimalesh12345@gmail.com',
              pass: ''
          }
      });
      let mailOptions = {
          from: 'bimalesh', // sender address
          to: "bimalesh12345@gmail.com", // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>Contact us page</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.json(info.messageId);
          });
      });

      const port = 5000;

      app.listen(port, () => `Server running on port ${port}`);
