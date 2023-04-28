import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

const SkillDetail = ({ skill }) => {
  return (
    <article className='cold-grey w-300 mod-detail centertxt mauto mt13 mb13'>
      <div>
        <Image src={skill?.image.url} alt={skill?.image.alt} width="100" height="100" />
      </div>
      <PrismicRichText field={skill?.title} />
    </article>
  )
}

export default SkillDetail