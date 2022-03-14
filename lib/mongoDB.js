import { MongoClient } from 'mongodb'

const url = `mongodb+srv://lizard:2j4u85ul3@cluster0.4wduj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

let clientPromise
const client = new MongoClient(url)

async function run() {
  try {
    global._mongoClientPromise = await client.connect()
    await client.db('lizard').command({ ping: 1 })

    console.log('Connected to server')
    clientPromise = global._mongoClientPromise
  } finally {
  }
}

run().catch(e => console.dir(e))

export default clientPromise
