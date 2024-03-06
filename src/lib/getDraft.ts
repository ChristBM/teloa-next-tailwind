export async function getDraft(URL: string) {
  const res = await fetch(URL)

  if (!res.ok) return null

  const { data } = await res.json()

  return data
}
