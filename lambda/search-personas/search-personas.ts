import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb')

export const handler: Handler = async (event:any, context:any) => {
  const { gamer_id = '' } = event.queryStringParameters
  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net"
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  const persona = await client.db("gamer-id-db").collection("persona").findOne({gamer_id: gamer_id})
  console.log('persona found!', persona)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify({ ...persona }),
  }
}
