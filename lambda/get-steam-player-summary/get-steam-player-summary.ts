import { Handler } from '@netlify/functions'
import axios from 'axios'

export const handler: Handler = async (event: any, _context: any) => {
  const { steam_id = '' } = event.queryStringParameters
  try {
    const { data } = await axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env['STEAM_KEY']}&steamids=${steam_id}`)
    // console.log('steam player summary found:', data.response.players[0])
    //good response
    return {
      statusCode: 200,
      headers: {
        'access-control-allow-origin': '*',
      },
      body: JSON.stringify({ steam_player_summary: data.response.players[0] }),
    }
    //ERROR RESPONSES
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // handleAxiosError(error)
      console.error('axios error', error)
      return {
        statusCode: 418,
        headers: {
          'access-control-allow-origin': '*',
        },
        body: JSON.stringify({ error }),
      }
    } else {
      // handleUnexpectedError(error)
      console.error('unexpected error', error)
      return {
        statusCode: 418,
        headers: {
          'access-control-allow-origin': '*',
        },
        body: JSON.stringify({ error }),
      }
    }
  }

}
