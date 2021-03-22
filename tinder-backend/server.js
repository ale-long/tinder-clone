import express from 'express';
import mongoose from 'mongoose';
import {connection_url} from './config.js'
import Cards from './Schema/dbCards.js';

// App Config 
const app = express();
const port = process.env.PORT || 8001

// Middlewares
app.use(express.json())

// DB config 
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints 
app.get('/', (req, res) => {
    res.status(200).send('Hello!');
})

app.post('/tinder/card', (req, res)=>{
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

// Listener 
app.listen(port, ()=> {
    console.log(`listening on localhost: ${port}`);
})

