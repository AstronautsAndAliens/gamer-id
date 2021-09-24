import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb');


export const handler: Handler = async (event:any, context:any) => {
  const { gamer_id = '' } = event.queryStringParameters
  console.log(gamer_id)
  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();
  await client.db("gamer-id-db").collection("persona").findOne({gamer_id})

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'success! new persona created in db' }),
  }
}
