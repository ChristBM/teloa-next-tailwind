// if you are consuming from Strapi local use this to conform the url of the images
// const apiURL = process.env.API_URL
// const removeLastSlash = apiURL?.replace(/\/$/, '')
// logo: `${removeLastSlash}${attributes.logo.data.attributes.url}`,
// logo: `${removeLastSlash}${plan.logo.data.attributes.url}`,

export function landingData(data: any[]) {
  if (data.length) {
    const { attributes } = data[0] // id, attributes

    const landing = {
      title: attributes.title,
      logo: attributes.logo.data.attributes.url,
      plans: attributes['carrier_plan'].map((plan: any) => ({
        id: plan.id,
        title: plan.text,
        prices: {
          actual: plan['new_price'],
          old: plan['old_price'],
          currency: plan.currency
        },
        logo: plan.logo.data.attributes.url,
      })),
    }

    return landing
  }

  return null
}

export function landingMultiCarrierData(data: any) {
  if (data.length) {
    return data[0].attributes
  }
}
