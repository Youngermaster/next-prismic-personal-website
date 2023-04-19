import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const SkillDetail = ({ skill }) => {
  return (
    <article className='bright-grey w-300 mod-detail centertxt mauto mt13 mb13'>
      <div>
        <img src={skill?.image.url} alt={skill?.image.alt} width="100" height="100" />
      </div>
      <PrismicRichText field={skill?.title} />
    </article>
  )
}

export default SkillDetail