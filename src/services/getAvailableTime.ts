import { APP_URL } from '@/constant/env'

export const getAvailableTime = async (date: string) => {
  try {
    const data: string[] = await fetch(`${APP_URL}/api/scheduling/time`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ date }),
    }).then((response) => response.json())
    return data
  } catch (error) {
    console.error('Failed to fetch times', error)
  }
}
