import Prismic from '@prismicio/client'

//endpoint
export const apiEndpoint = 'https://chrisphotography.prismic.io/api/v2'
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
    return '/'
  }