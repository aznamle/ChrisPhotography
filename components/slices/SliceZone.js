import React from 'react'

import { 
    ImageGallery,
} from './'

const SliceZone = ({ sliceZone }) => (
  <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('photos'):
          return <ImageGallery slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </div>
)

export default SliceZone