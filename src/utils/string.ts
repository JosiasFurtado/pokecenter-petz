export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const formatHour = (hour: string): string => {
  const parts = hour.split(':')
  if (parts.length === 3) {
    const [hour, minute] = parts
    return `${hour}:${minute}m`
  }

  return hour
}
