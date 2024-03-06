const apiURL = process.env.API_BASE_URL

export function landingData(data: any[]) {
  if (data.length) {
    const { attributes } = data[0] // id, attributes

    const landing = {
      title: attributes.title,
      logo: `${apiURL}${attributes.logo.data.attributes.url}`,
      plans: attributes['carrier_plan'].map((plan: any) => ({
        id: plan.id,
        title: plan.text,
        prices: {
          actual: plan['new_price'],
          old: plan['old_price'],
          currency: plan.currency
        },
        logo: `${apiURL}${plan.logo.data.attributes.url}`,
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
