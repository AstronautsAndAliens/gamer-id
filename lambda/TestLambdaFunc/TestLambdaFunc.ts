import { Handler } from '@netlify/functions'

export const handler: Handler = async (event: any, context: any) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
