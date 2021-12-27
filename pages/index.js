
import { Client } from '../prismic-configuration'

export default function Home() {
  return (
    <div className=''>
      <h1 className='text-3xl'>
        hello
      </h1>
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