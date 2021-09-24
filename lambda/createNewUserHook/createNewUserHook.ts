import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb');
import { v4 as uuidv4 } from 'uuid';

//connected to Auth0, Auth Pipeline, Hook, Post-User Registration
//endpoint should be called everytime a new user is registered with auth0 db
//saves information from auth0 user to db to begin account setup
export const handler: Handler = async (event: any, context: any) => {
  const { user_id = '', email = '', gamer_id = ''  } = event.queryStringParameters

  const newPersona = {
    id: uuidv4(),
    auth0_user_id: user_id,
    gamer_id,
    email
  }
  console.log(event.queryStringParameters)
  console.log(newPersona)
  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();
  await client.db("gamer-id-db").collection("persona").insertOne(newPersona)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'success! new persona created in db', newPersona }),
  }
}
