import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Capitol Commons Reformed Church (CCRC) is a Reformed-Evangelical Church situated inside the Estancia Mall at Capitol Commons, Pasig City. The main worship service is on Sundays, 4:00PM.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Capitol Commons Reformed Church',
  title: 'Capitol Commons Reformed Church',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
