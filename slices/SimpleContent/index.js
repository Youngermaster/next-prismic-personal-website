import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SimpleContentSlice} SimpleContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SimpleContentSlice>} SimpleContentProps
 * @param { SimpleContentProps }
 */
const SimpleContent = ({ slice }) => (
  <section className="bright-grey pad ">
    <div className="smush">
      <PrismicRichText field={slice.primary.title} />
      <div className='coco'>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </div>

  </section>
)

export default SimpleContent