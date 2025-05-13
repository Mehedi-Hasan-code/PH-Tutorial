const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://quazimehedihasanovi:03ZuB1t98i4lWWPc@cluster0.gu6xh68.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db('usersDB');
    const usersCollection = database.collection('users');

    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await usersCollection.findOne(query)
      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    app.put('/users/:id', async (req, res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const user = req.body
      console.log(user);
      const result = await usersCollection.updateOne(filter, {$set: {name: user.name, email: user.email}})
      res.send(result)
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await usersCollection.deleteOne(query)
      res.send(result)
    })

    await client.db('admin').command({ ping: 1 });
    console.log(`ping your deployment. You successfully connected to mongodb`);
  } finally {
  }
}

run().catch(console.dir);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`hello from backend`);
});

app.listen(port, () => {
  console.log(`listening from ${port}`);
});
