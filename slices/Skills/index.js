import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import SkillDetail from '@/components/SkillDetail'

/**
 * @typedef {import("@prismicio/client").Content.SkillsSlice} SkillsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SkillsSlice>} SkillsProps
 * @param { SkillsProps }
 */
const Skills = ({ slice }) => (
  <section className="cold-grey pad">
    <div className="smush">
      <PrismicRichText field={slice.primary.title} />
      <div className='aura aureole'>
        {
          slice?.items?.map((skill, i) =>
            <article className='bright-grey w-300 mod-detail centertxt mauto mt13 mb13'>
              <div>
                <img src={skill?.image.url} alt={skill?.image.alt} width="100" height="100" />
              </div>
              <PrismicRichText field={skill?.title} />
            </article>
          )
        }
      </div>
    </div>
  </section>
)

export default Skills