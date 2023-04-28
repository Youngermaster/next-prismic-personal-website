import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import Image from 'next/image'
/**
 * @typedef {import("@prismicio/client").Content.PortfolioSlice} PortfolioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioSlice>} PortfolioProps
 * @param { PortfolioProps }
 */
const Portfolio = ({ slice }) => (
  <section className="coco" id="portfolio">
    <div className="smush">
      <PrismicRichText field={slice.primary.title} />
      <div className='aureole two pad'>
        {
          slice?.items?.map((item, i) =>
            <div className='mod'>
              <PrismicLink field={item.link}>
                <div className='mod-media zoom'  style={{width: "100%", height: "auto"}} >
                  <Image src={item.image.url} alt={item.image.alt}  style={{width: "100%", height: "auto"}}  width="500" height="500" />
                </div>
              </PrismicLink>
              <div className='mod-detail black ' style={{color:"var(--coco-text-primary-inverse)"}}>
                <PrismicLink field={item.link}>
                <span  style={{color:"var(--coco-text-primary-inverse)"}}>

                  <PrismicRichText field={item.title}/>
                </span>
                </PrismicLink>
                <PrismicRichText field={item.description} />
              </div>
            </div>
          )
        }
      </div>
    </div>
  </section>
)

export default Portfolio