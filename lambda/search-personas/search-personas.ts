import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb')

export const handler: Handler = async (event:any, context:any) => {
  const { nickname = '' } = event.queryStringParameters
  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net"
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  const query = { nickname: { $regex: `.*${nickname}.*`}}
  const options = {}
  const personas = await client.db("gamer-id-db").collection("persona").find(query,options).toArray()
  console.log('persona found!', personas)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify([...personas]),
  }
}
