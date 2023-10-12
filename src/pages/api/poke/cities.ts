import { API_URL } from '@/constant/env'
import { GetCitiesResponse } from '@/types/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  if (
    req.headers['content-type']?.toLowerCase() !== 'application/json' &&
    !req.body.hasOwnProperty('region')
  ) {
    res.status(400).end()
    return
  }

  try {
    const data: GetCitiesResponse = await fetch(
      `${API_URL}/region/${req.body.region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    ).then((response) => response.json())

    res.setHeader('Cache-Control', 's-maxage=180, stale-while-revalidate')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao processar a solicitação',
      detail: error,
    })
  }
}
