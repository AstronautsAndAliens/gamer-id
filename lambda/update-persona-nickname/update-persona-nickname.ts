import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb');

export const handler: Handler = async (event:any, _context:any) => {
  const { gamer_id = '', nickname = '' } = event.queryStringParameters
  const client = new MongoClient(process.env['MONGODB_CONNECTION_STRING'], { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const persona = await client.db(process.env['MONGODB_DB_NAME']).collection(process.env['MONGODB_COLLECTION_PERSONA']).updateOne({gamer_id: gamer_id},{$set:{nickname: nickname}})
  console.log(persona)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify({ ...persona }),
  }
}
