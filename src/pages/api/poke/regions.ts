import { API_URL } from '@/constant/env'
import { GetRegionsResponse } from '@/types/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data: GetRegionsResponse = await fetch(`${API_URL}/region`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => response.json())

    res.setHeader('Cache-Control', 's-maxage=180, stale-while-revalidate')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao processar a solicitação',
      detail: error,
    })
  }
}
