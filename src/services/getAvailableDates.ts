import { APP_URL } from '@/constant/env'

export const getAvailableDates = async () => {
  try {
    const data: string[] = await fetch(`${APP_URL}/api/scheduling/date`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => response.json())
    return data
  } catch (error) {
    console.error('Failed to fetch dates', error)
  }
}
