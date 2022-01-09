import { Handler } from '@netlify/functions'
const { MongoClient } = require('mongodb')
import { v4 as uuidv4 } from 'uuid'
import {
  uniqueNamesGenerator,
  NumberDictionary,
  adjectives,
  colors,
  animals,
  starWars,
} from 'unique-names-generator'
import { IPersona } from 'src/app/models/persona.model'

//connected to Auth0, Auth Pipeline, Hook, Post-User Registration
//endpoint should be called everytime a new user is registered with auth0 db
//saves information from auth0 user to db to begin account setup
export const handler: Handler = async (event: any, _context) => {
  //these values come from a post-registration action on auth0 side, controlled by dashboard
  const {
    user_id = '',
    email = '',
    gamer_id = '',
  } = event.queryStringParameters

  const newPersona: IPersona = {
    id: uuidv4(),
    auth0_user_id: user_id,
    gamer_id,
    email,
    nickname: generateNickname(),
  }
  const client = new MongoClient(process.env['MONGODB_CONNECTION_STRING'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  await client.connect()
  await client
    .db(process.env['MONGODB_DB_NAME'])
    .collection(process.env['MONGODB_COLLECTION_PERSONA'])
    .insertOne(newPersona)
  console.log('new user created!', newPersona)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'success! new persona created in db',
      newPersona,
    }),
  }
}
const generateNickname = (): string => {
  const numbers = NumberDictionary.generate({ min: 100, max: 999 })
  return uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals, starWars, numbers],
    separator: '',
    length: 3,
    style: 'capital',
  })
}
