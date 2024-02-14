import { LandingCarrier, LandingType, Locale } from '@/common/definitions'
import { getLanding } from '@/lib/data'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
// https://<your-site>/api/draft?secret=<token>&slug=<path>&design=<number>

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const design = searchParams.get('design')

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.DRAFT_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  const splitSlug = slug.split(',')

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getLanding({
    type: splitSlug[1] as LandingType,
    carrier: splitSlug[2] as LandingCarrier,
    lng: splitSlug[0] as Locale,
    publicationState: 'preview'
  })

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post) {
    return new Response('Invalid slug', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  const queryP = design ? `?design=${design}` : '/'

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(`${process.env.BASE_URL}${splitSlug[0]}/landing/${splitSlug[1]}/${splitSlug[2]}${queryP}`)
}
