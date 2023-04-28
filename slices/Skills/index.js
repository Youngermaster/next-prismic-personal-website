import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import SkillDetail from '@/components/SkillDetail'

/**
 * @typedef {import("@prismicio/client").Content.SkillsSlice} SkillsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SkillsSlice>} SkillsProps
 * @param { SkillsProps }
 */
const Skills = ({ slice }) => (
  <section className="coco">
    <div className="smush">
      <PrismicRichText field={slice.primary.title} />
      <div className='coco aureole' >
        {
          slice?.items?.map((skill, i) =>
            <SkillDetail skill={skill} key={i}/>
          )
        }
      </div>
    </div>
  </section>
)

export default Skills