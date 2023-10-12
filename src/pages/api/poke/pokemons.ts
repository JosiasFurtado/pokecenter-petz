import { API_URL } from '@/constant/env'
import { GetPokemonsResponse } from '@/types/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data: GetPokemonsResponse = await fetch(
      `${API_URL}/pokemon?limit=300`,
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
      error: 'Error processing the request',
      detail: error,
    })
  }
}
