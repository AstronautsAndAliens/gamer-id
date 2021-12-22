import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb');


export const handler: Handler = async (event:any, context:any) => {
  console.log('get-persona called')
  const { gamer_id = '', nickname = '' } = event.queryStringParameters
  const uri = "mongodb+srv://admin:r6L9wGfIsuILdZVI@cluster0.acggh.mongodb.net";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const query:any = {}
  if(gamer_id != ''){ query.gamer_id = gamer_id } //gamer_id overrides nickname if provided
  else if(nickname != ''){ query.nickname = nickname}
  console.log('query', query)
  const persona = await client.db("gamer-id-db").collection("persona").findOne(query)
  console.log('persona found!', persona)
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify({ ...persona }),
  }
}
