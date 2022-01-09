import { Handler } from '@netlify/functions'
import { IPersona } from 'src/app/models/persona.model'
const { MongoClient } = require('mongodb')

export const handler: Handler = async (event:any, _context:any) => {
  const { gamer_id = '', nickname = '' } = event.queryStringParameters
  const client = new MongoClient(process.env['MONGODB_CONNECTION_STRING'], { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  const query:any = {}
  if(gamer_id != ''){ query.gamer_id = gamer_id } //gamer_id overrides nickname if provided
  else if(nickname != ''){ query.nickname = nickname}
  const persona: IPersona = await client.db(process.env['MONGODB_DB_NAME']).collection(process.env['MONGODB_COLLECTION_PERSONA']).findOne(query)
  // console.log('persona found!', persona)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify({ ...persona }),
  }
}
