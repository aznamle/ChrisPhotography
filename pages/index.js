
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components/slices'


export default function Home({ doc }) {

  return (
    <div className=''>
        <SliceZone sliceZone={doc.data.body} />
    </div>
  )
}


export async function getStaticProps({ preview = null, previewData = {} }) {
  
  const { ref } = previewData
  const client = Client();
  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}
  
  return {
    props: {
      doc
    },
    revalidate: 1,
  }
}