const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors())
app.use(express.json())
app.get('/', (request, response) => {
    response.send('Hello, world')
});



const uri = "mongodb+srv://assignment:ajA7Kb9xyRYSzt5@cluster0.mmeqena.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const databaseUsers = client.db('tammat').collection('services')
        app.get('/services', async (req, res) => {
            const quary = {}
            const cursor = databaseUsers.find(quary)
            const user = await cursor.toArray()
            res.send(user)
        })

        // get 1 service 
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const user = await databaseUsers.findOne(query)
            res.send(user)
            console.log(query, user)
        })
        app.post('/services/:id', async (req, res) => {
            const service = req.body
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const updateDoc = {
                $set: {
                    isBook: true
                }
            }
            const user = await databaseUsers.updateOne(query, service)
            res.send(user)
            console.log(query, user)
        })



        // ------------------------------------------------------------------


        const reviewUser = client.db('tammat').collection('review')
        app.get('/review', async (req, res) => {
            const quary = {}
            const cursor = reviewUser.find(quary)
            const user = await cursor.toArray()
            res.send(user)
        })

        app.get('/review/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const user = await reviewUser.findOne(query)
            res.send(user)

        })



    }
    finally { }
}
run()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






/* https://ibb.co/17DnYyx
https://ibb.co/CJ6Yhsb
https://ibb.co/J3nHVpC
https://ibb.co/3YRy1Qg
https://ibb.co/t2yxhTy
https://ibb.co/RNJcFbj
https://ibb.co/BGd0C4Y
https://ibb.co/bFJCskH
https://ibb.co/j5fW6Gd
https://ibb.co/CwrPZhv
https://ibb.co/xfTc0kJ
https://ibb.co/5cmNnzq
https://ibb.co/wQJwRRk
https://ibb.co/sbjssS3
https://ibb.co/t45qZgK
https://ibb.co/pXwPcFY
https://ibb.co/C76xmsd
https://ibb.co/5rzg5mq
https://ibb.co/pbYrbGt
https://ibb.co/tzgG1vD
https://ibb.co/HK08bSZ
https://ibb.co/80B6q5V
https://ibb.co/7nHmHH4
https://ibb.co/7GW0rXR
https://ibb.co/s15zd7h
https://ibb.co/Bf5NDPR
https://ibb.co/pRr8Mnd
https://ibb.co/hVxN5TG
https://ibb.co/F6Y8d39
https://ibb.co/XbYjs5V */



/* 

[
    {
        "img": "https://i.ibb.co/gd6fhT3/event.jpg",
        "title": "Premium Sponsorship",
        "ratings": "4.5",
        "isBook": false
    },
    {
        "img": "https://i.ibb.co/p22qkWC/loading2.jpg",
        "title": "Platinum Sponsorship",
        "ratings": "4.5",
        "isBook": false
    },
    {
        "img": "https://i.ibb.co/zGbnckG/champion2.jpg",
        "title": "Golden Sponsorship ",
        "ratings": "5",
        "isBook": false
    },
    {
        "img": "https://i.ibb.co/y0JZwkC/loading5.jpg",
        "title": "Health & Fitness Guide",
        "ratings": "4",
        "isBook": false
    },
    {
        "img": "https://i.ibb.co/jMH6p3S/fast-aid3.jpg",
        "title": "Tammat's Charity",
        "ratings": "5",
        "isBook": false
    },
    {
        "img": "https://i.ibb.co/gg97NKk/loading4.jpg",
        "title": "Learn Cycling",
        "ratings": "5",
        "isBook": false
    }
] */