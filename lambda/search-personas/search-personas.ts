import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb')

export const handler: Handler = async (event:any, _context:any) => {
  const { nickname = '' } = event.queryStringParameters
  const client = new MongoClient(process.env['MONGODB_CONNECTION_STRING'], { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  const query = { nickname: { $regex: `.*${nickname}.*`}}
  const options = {}
  const personas = await client.db(process.env['MONGODB_DB_NAME']).collection(process.env['MONGODB_COLLECTION_PERSONA']).find(query,options).toArray()
  console.log('persona found!', personas)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify([...personas]),
  }
}
