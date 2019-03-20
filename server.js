let express = require("express");
let faker = require("faker");
let bodyParser = require("body-parser");
let expressLayouts = require("express-ejs-layouts");

let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/about', (req, res) => {
    let users = [
        {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'https://placekitten.com/300/300'
        },
        {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'https://placekitten.com/400/400'
        },
        {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'https://placekitten.com/500/500'
        }
    ];

    res.render('pages/about', {usuarios: users});
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.post('/contact', (req, res) => {
    res.render('Obrigado por entrar em contato, ' + req.body.name + '!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{
    console.log("Server openned at: http://localhost:"+port);
});