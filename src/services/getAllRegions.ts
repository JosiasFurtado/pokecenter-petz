import { APP_URL } from '@/constant/env'
import { GetRegionsResponse } from '@/types/api'

export const getAllRegions = async () => {
  try {
    const data: GetRegionsResponse = await fetch(
      `${APP_URL}/api/poke/regions`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    ).then((response) => response.json())
    return data.results
  } catch (error) {
    console.error('Failed to fetch regions', error)
  }
}
