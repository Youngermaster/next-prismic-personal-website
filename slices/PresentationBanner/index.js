import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PresentationBannerSlice} PresentationBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PresentationBannerSlice>} PresentationBannerProps
 * @param { PresentationBannerProps }
 */
const PresentationBanner = ({ slice }) => (


    <section className="grey pad pdb0 ">
          <div className="smush aureole blog ">
            <div className="valign centertxt">
            <div className="mb13 golden-text"><PrismicRichText field={slice.primary.title}/></div>
            <h2><PrismicRichText className="mb13" field={slice.primary.description} /></h2>
            <PrismicLink className="button-fill mt13 smish mauto golden-border" field={slice.primary.contact_me}><span className="container golden-text">Contact Me</span></PrismicLink>
            </div>
            <div className="centertxt">
              <img src={slice.primary.photo.url} alt={slice.primary.photo.alt} className="vfluid"/>
            </div>
          </div>
        </section>
)

export default PresentationBanner