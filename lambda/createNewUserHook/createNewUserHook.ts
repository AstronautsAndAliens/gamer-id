import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb');


export const handler: Handler = async (event, context) => {
  const { name = '', email = ''  } = event.queryStringParameters

  const uri = "mongodb+srv://admin:<password>@cluster0.acggh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect(err => {
    const collection = client.db("gamer-id-db").collection("users");
    const newUser = {
      name,
      email
    }
    collection.insert(newUser)
    client.close();
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name: name,
      email: email
    }),
  }
}
