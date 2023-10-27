const express = require('express')
const app = express()
const port = 4000
const path = require('path');// __dirname


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {//IMPORTANT gets requests, listens to local port 4000
    res.send('Welcome to Data Representation & Querying')
})

app.get('/whatever', (req, res) => {//goes to url, executes methods req/res
    res.send('Good Bye');
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);//pulls from URL
    res.send('Hello ' + req.params.name);
})

app.get('/api/books', (req, res) => {//json copied from teams
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];

    res.status(200).json({//status code only visible on server software (200 =  success/ 201 = change)
        myBooks:data,
        "message":"Hello from the server"
    });
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/name', (req,res) => {//body-parser, (URL ONLY SHOWS /NAME)
    res.send("Hello " + req.body.fname);
})
//LOOK AT URL NAMES
app.get('/name', (req,res) => {//(URL SHOW THE QUERY (?data) YOU PUT INTO INPUTS IN INDEX.HTML)
    res.send("Hello " + req.query.fname + " " + req.query.lname);//gets fname/lname from index.html
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
