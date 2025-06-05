require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// middleWere
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gu6xh68.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const coffeesCollection = client.db('coffeeDB').collection('coffees');

    const usersCollection = client.db('coffeeDB').collection('users');

    app.get('/coffees', async (req, res) => {
      const cursor = coffeesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    });

    app.post('/coffees', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result);
    });

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const newUpdatedCoffee = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: newUpdatedCoffee,
      };
      const options = { upsert: true };
      const result = await coffeesCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });

    // user related Apis
    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    app.post('/users', async (req, res) => {
      try {
        const userInfo = req.body;
        const result = await usersCollection.insertOne(userInfo);
        res.send(result);
      } catch (error) {
        res
          .status(500)
          .send({ error: 'Failed to insert user', details: error.message });
      }
    });
    app.patch('/users', async (req, res) => {
      const { email, lastSignInTime } = req.body;
      const filter = { email };
      const updateDoc = {
        $set: {
          lastSignInTime,
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // await client.db('admin').command({ ping: 1 });
    // console.log(
    //   'Pinged your deployment. You successfully connected to MongoDB!'
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => console.log(`listening from ${port}`));
