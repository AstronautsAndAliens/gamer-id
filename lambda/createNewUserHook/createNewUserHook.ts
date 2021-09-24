import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb');
import { v4 as uuidv4 } from 'uuid';

export const handler: Handler = async (event: any, context: any) => {
  const { name = '', email = ''  } = event.queryStringParameters

  const newUser = {
    id: uuidv4(),
    name,
    email
  }

  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();
  await client.db("gamer-id-db").collection("users").insertOne(newUser)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'new user created in db', newUser }),
  }
}
