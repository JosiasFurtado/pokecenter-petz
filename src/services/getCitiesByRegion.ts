import { APP_URL } from '@/constant/env'
import { GetCitiesResponse } from '@/types/api'

export const getCitiesByRegion = async (region: string) => {
  try {
    const data: GetCitiesResponse = await fetch(`${APP_URL}/api/poke/cities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ region }),
    }).then((response) => response.json())
    return data.locations
  } catch (error) {
    console.error('Failed to fetch cities', error)
  }
}
