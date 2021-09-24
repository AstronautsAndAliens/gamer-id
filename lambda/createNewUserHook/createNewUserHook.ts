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

  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net/gamer-id-db?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  console.log(newUser)
  await client.connect((err: any) => {
    const collection = client.db("gamer-id-db").collection("users");
    console.log('collection')
    collection.insert(newUser)
    client.close();
    if(err) console.log(err)
  });

  return {
    statusCode: 200,
    body: JSON.stringify(newUser),
  }
}
