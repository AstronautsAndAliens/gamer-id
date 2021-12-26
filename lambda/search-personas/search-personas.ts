import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb')
import { IPersona } from 'src/app/models/persona.model'
import { ISearchFilters } from 'src/app/models/search.model'

export const handler: Handler = async (event:any, _context:any) => {
  const filters: ISearchFilters = {
    nickname: event.queryStringParameters.nickname
  }
  const { nickname = '' } = filters
  const client = new MongoClient(process.env['MONGODB_CONNECTION_STRING'], { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  const query = { nickname: { $regex: `.*${nickname}.*`}}
  const options = {}
  const personas: IPersona[] = await client.db(process.env['MONGODB_DB_NAME']).collection(process.env['MONGODB_COLLECTION_PERSONA']).find(query,options).toArray()
  console.log('search success!', personas)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify([...personas]),
  }
}
