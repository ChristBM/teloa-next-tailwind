import { draftMode } from 'next/headers'
// http://localhost:3000/api/disable-draft

export async function GET(request: Request) {
  draftMode().disable()

  return new Response('Draft mode is disabled')
}
